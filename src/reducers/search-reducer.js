const CHANGE_STRING = "CHANGE_STRING";
const CHANGE_FILTER = "CHANGE_FILTER";
let initialState = {
    postToFind: '',
    filter: {
        Caribbean: true,
        Greek: true,
        French: true,
        Indian: true,
        Chinese: true,
        kCal: [100, 1200]
    }
}

const searchReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case CHANGE_STRING:
            newState.postToFind = action.postToFind;
            return newState;
        case CHANGE_FILTER:
            newState.filter = action.filter;
            return newState;
        default:
            return newState;
    }
}

export function loadChangeMenuActionCreator(postToFind) {
    return { type: CHANGE_STRING, postToFind: postToFind }
}
export function loadFilterMenuActionCreator(filter) {
    return { type: CHANGE_FILTER, filter: filter }
}

export function changeMenuThunkCreator(data) {

    return (dispatch) => {
        dispatch(loadChangeMenuActionCreator(data));
    }
}
export function filterMenuThunkCreator(data) {

    return (dispatch) => {
        dispatch(loadFilterMenuActionCreator(data));
    }
}



export default searchReducer;