import { createStore, combineReducers, applyMiddleware } from 'redux';
import menuReducer from '../reducers/menu-reducer';
import detailReducer from '../reducers/details-reducer';
import searchReducer from '../reducers/search-reducer';
import thunk from 'redux-thunk';

let reducers = combineReducers({
    menuPage: menuReducer,
    detailsPage: detailReducer,
    filterPage: searchReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;