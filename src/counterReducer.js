const initState = { sum: 0, size: 0 };
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'updateCounterSize':
            return { ...state, size: action.payload };
        case 'updateSum':
            return { ...state, sum: (state.sum + action.payload) };
        case 'restSum':
            return { ...state, sum: 0 };
        default:
            return state;
    };
};

export default counterReducer;