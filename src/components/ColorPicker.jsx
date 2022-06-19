import React, {useState, useEffect} from 'react'

export const ColorPicker = () => {
    const [selected, setSelected] = useState("Main");
    const [isActive, setIsActive] = useState(false);
    const [name, setName] = useState("");

    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeSelected = (event) => {
        console.log(event)
        setSelected(event.target.value)
        toggleIsActive()
    }

    useEffect(() => {

    }, [isActive, selected])
    

    return (
        <div className="colorpicker-comp">
            <div className="colorpicker-comp__nav">
                <div className="nav-cotainer">
                    <div className='nav-cotainer__title'>
                        <h2>Добавление цвета</h2>
                    </div>
                    <div className='nav-cotainer__options'>
                        <label>
                            <p>Название цвета</p>
                            <input type="text" placeholder="Введите название" value={name} onChange={changeName}/>
                        </label>
                        <label>
                            <p>Выберите тип</p>
                            <div className="selected" onClick={() => toggleIsActive()}>
                                {selected}
                            </div>
                        </label>
                        <label className='label__select-box'>
                            <div className="select-box">
                                <div className={isActive ? "options-container active" : "options-container"} onChange={(event) => changeSelected(event)}>
                                        <input 
                                            type="radio" 
                                            className="radio" 
                                            id="main" 
                                            value="Main" 
                                            name="color_type"
                                        />
                                        <label className="option" htmlFor="main">Main</label>
                                        <input 
                                            type="radio" 
                                            className="radio" 
                                            id="primary" 
                                            value="Primary" 
                                            name="color_type"
                                        />
                                        <label className="option" htmlFor="primary">Primary</label>
                                        <input 
                                            type="radio" 
                                            className="radio" 
                                            id="secondary" 
                                            value="Secondary" 
                                            name="color_type"
                                            style={{ height: 40,
                                                padding: "12px 11px",
                                                cursor: "pointer"
                                            }}
                                        />
                                        <label className="option" htmlFor="secondary">Secondary</label>
                                        <input 
                                            type="radio" 
                                            className="radio" 
                                            id="base" 
                                            value="Base" 
                                            name="color_type"
                                        />
                                        <label className="option" htmlFor="base">Base</label>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            <div className="colorpicker-comp__add-button">
                    <button className="add-button add-button_colorpicker">Добавить</button>
            </div>
        </div>
    )
}
