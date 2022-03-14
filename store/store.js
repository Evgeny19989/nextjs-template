import {createStore , applyMiddleware} from 'redux'
import root from "./reducers/root";
import thunk from "redux-thunk";

import {composeWithDevTools} from "redux-devtools-extension";
const middleware = [thunk]
const initialState = {}

const store = createStore(
    root,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)


export default store