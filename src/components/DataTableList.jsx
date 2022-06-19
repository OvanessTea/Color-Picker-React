import React, {useState, useEffect, useContext} from 'react';
import {DataTableItem} from "./DataTableItem";
import {ColorPickerContext} from "../context";


const DataTableList = (props) => {
    const {showColorPicker} = props;
    const {dataColorList} = useContext(ColorPickerContext)
    let [dataColor, setDataColor] = useState(dataColorList)

    const saveToLocalStorage = () => {
        localStorage.setItem('dataColorList', dataColorList);
    }

    useEffect(() => {
        setDataColor(localStorage.getItem('dataColorList'))
    }, [])

    useEffect(() => {
    }, [dataColor, dataColorList])
    
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
                        {dataColorList && 
                            dataColorList.map((item, index) => (
                                <DataTableItem key={index} {...item} item={item} index={index}/>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="data-comp__add-button">
                <button className="add-button" onClick={() => showColorPicker()}>Добавить цвет</button>
            </div>
        </div>
    )
}

export  {DataTableList}