import React, {useState, useEffect} from 'react';
import {DataTableItem} from "./DataTableItem"


const DataTableList = () => {
    let [dataColor, setDataColor] = useState([
        {name: "Мятное утро", type: "base", color: "#86EAE9"},
        {name: "Лавандовый пунш", type: "main", color: "#B8B2DD"},
        {name: "Светло-коралловый", type: "main", color: "#FFBCAD"},
    ])

    const saveToLocalStorage = () => {
        localStorage.setItem('dataColor', dataColor);
        console.log(localStorage.getItem('dataColor'));
    }

    const removeColor = (index) => {
        dataColor.splice(index, 1);
        setDataColor([...dataColor])
    }

    // useEffect(() => {
    //     setDataColor(localStorage.getItem('dataColor'))
    // }, [])

    useEffect(() => {
    }, [dataColor])
    
    return (
        <div className='data-comp'>
            <div className="data-comp__nav">
                <div className="data-comp__title">
                    <h2>Таблица цветов</h2>
                </div>
                <div>
                    <button className="data-comp__icon _icon" onClick={() => saveToLocalStorage()}>
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="save_icon">
                            <path fillRule="evenodd" clipRule="evenodd" d="M19 9.49323V19H6V6H15.1985L19 9.49323ZM15.5882 5L20 9.05405V20H5V5H15.5882Z" fill="#8D8D8D"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 15H9V19H16V15ZM8 14V20H17V14H8Z" fill="#8D8D8D"/>
                        </svg>
                    </button>
                    <button className="data-comp__icon _icon">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="close_icon">
                            <rect width="1.06064" height="11.6671" transform="matrix(0.707115 0.707099 -0.707115 0.707099 16.25 8)" fill="#777777"/>
                            <rect width="1.06064" height="11.6671" transform="matrix(-0.707114 0.707099 -0.707114 -0.707099 16.9999 16.25)" fill="#777777"/>
                        </svg>                            
                    </button>
                </div>
            </div>
            <div className="data-comp__table">
                <table border="1">
                    <tbody>
                        <tr>
                            <th width="90px">Цвет</th>
                            <th width="134px">Название</th>
                            <th width="115px">Тип</th>
                            <th width="115px">Код</th>
                            <th width="115px">Изменить</th>
                            <th width="115px">Удалить</th>
                        </tr>
                        {dataColor && 
                            dataColor.map((item, index) => (
                                <DataTableItem key={index} {...item} index={index} removeColor={removeColor}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="data-comp__add-button">
                <button className="add-button">Добавить цвет</button>
            </div>
        </div>
    )
}

export  {DataTableList}