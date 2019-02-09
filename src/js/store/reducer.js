const initialState = {
    isLoading: true,
    mentorName: undefined
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_MENTOR':
            return { ...state, mentorName: action.payload };
        case 'SET_TASKS':
            return { ...state, tasks: action.payload };
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload,
                isLoading: !state.isLoading
            };
        default:
            return state;
    }
};
