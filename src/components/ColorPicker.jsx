import React from 'react'

export const ColorPicker = () => {
       
    return (
               <div className="colorPicker__container">
                <svg width="245" height="220">
                <defs>
                <linearGradient id="pickerHue">
                    <stop offset="0" stopColor="#fff" stopOpacity="1"/>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"/>
                </linearGradient>
                <linearGradient id="pickerBrightness" x2="0" y2="1">
                    <stop offset="0" stopColor="#000" stopOpacity="0"/>
                    <stop offset="1" stopColor="#000" stopOpacity="1"/>
                </linearGradient>
                </defs>
                <rect id="picker" width="215" height="220" fill="#FF0000" rx="3" ry="3"/>
                <rect className="pickerGradient" width="215" height="220" fill="url(#pickerHue)" rx="2" ry="2"/>
                <rect className="pickerGradient" width="215" height="220" fill="url(#pickerBrightness)" rx="2" ry="2"/>
                <circle id="pickerHandler" r="12.5" fill="none" stroke="#5B5B5B" strokeWidth="1"/>
                <rect id="slider" width="220" height="25" y="-45" rx="0" ry="0" transform="rotate(90 100 100)"/>
                <rect id="sliderHandler" width="2" fill="#7C7C7C" height="25" y="-45" transform="rotate(90 90 110)"/>
                
            </svg>
            <section id="hex">
                <p>Color</p>
                <label>
                <p className="hex_p">HEX</p>
                <input className="hex_p" value="FFFFFF" onChange={() => {}}/>
                <div id="currentColor" style={{background: '#fff'}}></div>
                </label>
            </section>
            <section id="rgb">
                <label>
                <p>R</p>
                <input type="number" min="0" max="255" value="255" className="r" onChange={() => {}}/>
                </label>
                <label>
                <p>G</p>
                <input type="number" min="0" max="255" value="255" className="g" onChange={() => {}}/>
                </label>
                <label>
                <p>B</p>
                <input type="number" min="0" max="255" value="255" className="b" onChange={() => {}}/>
                </label>
            </section>
            <section id="hsb">
            <label>
                <p title="Hue">H</p>
                <input type="number" min="0" max="360" value="0" className="h" onChange={() => {}}/>
            </label>
            <label>
                <p title="Saturation">S</p>
                <input type="number" min="0" max="100" value="0" className="s" onChange={() => {}}/>
            </label>
            <label>
                <p title="Brightness">B</p>
                <input type="number" min="0" max="100" value="100" className="b" onChange={() => {}}/>
            </label>
            </section>
            <section id="usualColors">
                <div className="exampleColor" style={{background: "#D0021B"}}></div>
                <div className="exampleColor" style={{background: "#F5A623"}}></div>
                <div className="exampleColor" style={{background: "#F8E71C"}}></div>
                <div className="exampleColor" style={{background: "#8B572A"}}></div>
                <div className="exampleColor" style={{background: "#7ED321"}}></div>
                <div className="exampleColor" style={{background: "#BD10E0"}}></div>
            </section>
            
        </div>
    )
}
