import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ColorPickerContext = createContext();

const initialState = {
    dataColorList: [
        {name: "Мятное утро", type: "base", color: "#86EAE9"},
        {name: "Лавандовый пунш", type: "main", color: "#B8B2DD"},
        {name: "Светло-коралловый", type: "main", color: "#FFBCAD"},
    ]
};

export const ContextProvider = ({ children }) => {
    const [value, dispatch] = useReducer(reducer, initialState);
    value.addColor = (color) => {
        dispatch({ type: "ADD_COLOR", payload: color });
    };
    value.removeColor = (color) => {
        dispatch({ type: "REMOVE_COLOR", payload: color });
    };

    return (
        <ColorPickerContext.Provider value={value}>
            {children}
        </ColorPickerContext.Provider>
    );
};