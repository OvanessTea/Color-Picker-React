export function reducer(state, { type, payload }) {
    switch (type) {
        case "ADD_COLOR":
            return {
                ...state,
                dataColorList: [...state.dataColorList, payload]
            };
        case "REMOVE_COLOR":
            return {
                ...state,
                dataColorList: state.dataColorList.filter(
                    (color) => color !== payload
                ),
            };
        case "UPDATE_COLOR":
        return {
            ...state,
            dataColorList: [state.dataColorList[payload.index] = payload.color],
        };
        default:
            return state;
    }
}