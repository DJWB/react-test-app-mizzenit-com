import {TYPE_AUTOCOMPLETE_EMPTY, TYPE_AUTOCOMPLETE_LOADED, TYPE_AUTOCOMPLETE_LOADING} from "./autocomplete-actions"

const init = {
    type: TYPE_AUTOCOMPLETE_EMPTY,
    items: []
};

export default function state(_state = init, action) {

    let state = Object.assign({}, _state);

    switch (action.type) {
        case TYPE_AUTOCOMPLETE_LOADING:
            state.type = TYPE_AUTOCOMPLETE_LOADING;
            state.items = action.items;
            return state;

        case TYPE_AUTOCOMPLETE_LOADED:
            state.type = TYPE_AUTOCOMPLETE_LOADED;
            state.items = action.items;
            return state;

        default:
            return _state;
    }
};