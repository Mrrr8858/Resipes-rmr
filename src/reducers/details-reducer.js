import { menuApi } from "../API/menuApi";

const LOAD_DETAIL = "LOAD_DETAIL";
let initialState = {
    detail: {}
}

const detailReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_DETAIL:
            newState.detail = action.detail;
            return newState;
        default:
            return newState;
    }
}

export function loadDetailActionCreator(detail) {
    return { type: LOAD_DETAIL, detail: detail }
}

export function loadDetailThunkCreator(id) {
    return (dispatch) => {
        menuApi.getDetails(id).then(data => {
            dispatch(loadDetailActionCreator(data));
        })
    }
}


export default detailReducer;