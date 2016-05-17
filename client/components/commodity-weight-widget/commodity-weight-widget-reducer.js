import {TYPE_COMMODITY_WEIGHT_COPY_ITEM, TYPE_COMMODITY_WEIGHT_SET_ITEM} from "./commodity-weight-widget-actions"

const init = {
    items: [{
        value: "",
        weight: "",
        type: ""
    }]
};

export default function state(_state = init, action) {

    let state = Object.assign({}, _state);

    switch (action.type) {
        case TYPE_COMMODITY_WEIGHT_COPY_ITEM:
            state.items.push(action.payload);
            return state;

        case TYPE_COMMODITY_WEIGHT_SET_ITEM:
            let index = _state.items.indexOf(action.payload);
            state.items[index] = Object.assign({}, action.payload);
            return state;

        default:

            return _state;
    }
};