import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import commodity from "./components/commodity-weight-widget/commodity-weight-widget-reducer"
import autocomplete from "./components/autocomplete/autocomplete-reducer"

export default function store(initialState) {


    return createStore(
        combineReducers({
            commodityWidget: commodity,
            autocomplete: autocomplete
        }),
        initialState,
        applyMiddleware(thunk)
    );

}