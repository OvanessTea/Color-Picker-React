import React, {useState, useEffect, useContext} from 'react';
import {Colorpicker} from './color-picker'
import {ColorPickerContext} from "../context";

export const ColorPickerFrame = (props) => {
    const {hideColorPicker, updatedColor} = props;
    const {addColor, updateColor_context} = useContext(ColorPickerContext);
    const [selected, setSelected] = useState("Main");
    const [isActive, setIsActive] = useState(false);
    const [colorName, setColorName] = useState("");
    const [currentColor, setCurrentColor] = useState("#fff");
    const [isColorChanging, setIsColorChanging] = useState(false);

    
    
    
    const toggleIsActive = () => {
        setIsActive(!isActive);
    }

    const submitColor = () => {
        if (isColorChanging) {
            updateColor_context({name: colorName, type: selected.toLowerCase(), color: currentColor.toUpperCase()}, updatedColor[1])
            setIsColorChanging(false)
        } else {
            addColor({
                name: colorName,
                type: selected.toLowerCase(),
                color: currentColor.toUpperCase()
            })
        }
        hideColorPicker()
    }

    const changeName = (event) => {
        setColorName(event.target.value)
    }

    const changeSelected = (event) => {
        setSelected(event.target.value)
        toggleIsActive()
    }

    useEffect(() => {
        setColorName(updatedColor[1] !== null ? updatedColor[0].name : "")
        setSelected(updatedColor[1] !== null ? updatedColor[0].type.charAt(0).toUpperCase() + updatedColor[0].type.slice(1) : "Main")
        setIsColorChanging(updatedColor[1] !== null ? true: false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
    }, [isActive, selected, colorName, currentColor, updatedColor])
    

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
                            <input type="text" placeholder="Введите название" value={colorName} onChange={changeName}/>
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
            <Colorpicker setCurrentColor={setCurrentColor} updatedColor={updatedColor[0].color}/>
            <div className="colorpicker-comp__add-button">
                <button className="add-button add-button_colorpicker" onClick={() => {
                    submitColor()
                }}>Добавить</button>
            </div>
            
        </div>
    )
}
