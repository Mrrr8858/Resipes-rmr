import { menuApi } from "../API/menuApi";

const LOAD_MENU = "LOAD_MENU";
let initialState = {
    menu: {}
}

const menuReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case LOAD_MENU:
            newState.menu = action.menu;
            return newState;
        default:
            return newState;
    }
}

export function loadMenuActionCreator(menu) {
    return { type: LOAD_MENU, menu: menu }
}


export function loadMenuThunkCreator() {
    return (dispatch) => {
        menuApi.getMenu().then(data => {
            dispatch(loadMenuActionCreator(data));
        })
    }
}

export default menuReducer;