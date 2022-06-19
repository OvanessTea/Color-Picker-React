import React, {useContext} from 'react';
import {ColorPickerContext} from "../context";

const DataTableItem = (props) => {
    const {name, type, color, item, index} = props;

    const {removeColor} = useContext(ColorPickerContext)
    return (
        <tr className='item'>  
            <td className='item__colomn item__preview'><div className='color_div' style={{background: color}}></div></td>
            <td className='item__colomn' ><p>{name}</p></td>
            <td className='item__colomn'><p>{type}</p></td>
            <td className='item__colomn'><p>{color}</p></td>
            <td className='item__colomn'>
                <button className='_icon'>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' className='edit_icon'>
                        <path d='M12.8701 3.60447C13.0429 3.41283 13.2481 3.26081 13.4739 3.1571C13.6997 3.05338 13.9417 3 14.1861 3C14.4306 3 14.6726
                                        3.05338 14.8984 3.1571C15.1242 3.26081 15.3293 3.41283 15.5022 3.60447C15.675 3.79611 15.8121 4.02362 15.9056 4.27401C15.9991 4.5244 16.0473
                                        4.79277 16.0473 5.06379C16.0473 5.33481 15.9991 5.60317 15.9056 5.85356C15.8121 6.10395 15.675 6.33146 15.5022 6.5231L6.61905 16.3735L3
                                        17.468L3.98701 13.4549L12.8701 3.60447Z' stroke='#8D8D8D' strokeLinecap='round' strokeLinejoin='round'/>
                    </svg>                            
                </button>
            </td>
            <td className='item__colomn'>
                <button id='delete_btn' className='_icon' onClick={() => {removeColor(item)}}>
                    <svg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' className='delete_icon'>
                        <path fillRule='evenodd' clipRule='evenodd' d='M15 4H4L5.26923 16H13.7308L15 4ZM13.8887 5H5.11135L6.16904 15H12.831L13.8887 5Z' fill='#8D8D8D'/>
                        <rect x='4' y='3' width='11' height='2' fill='#8D8D8D'/>
                    </svg>                      
                </button>
            </td>
        </tr>
    )
}

export {DataTableItem}