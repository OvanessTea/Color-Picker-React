export function reducer(state, { type, payload }) {
    switch (type) {
        case "ADD_COLOR":
            // newColor = state.dataColorList.map()
            state.dataColorList.push(payload)
            return {
                ...state,
            };
        case "REMOVE_COLOR":
            return {
                ...state,
                dataColorList: state.dataColorList.filter(
                    (color) => color !== payload
                ),
            };
        default:
            return state;
    }
}