import fetch from "isomorphic-fetch";

export const TYPE_COMMODITY_WEIGHT_COPY_ITEM = 'TYPE_COMMODITY_WEIGHT_COPY_ITEM';
export const TYPE_COMMODITY_WEIGHT_SET_ITEM = 'TYPE_COMMODITY_WEIGHT_SET_ITEM';


export function copyItem(item) {
    return {
        type: TYPE_COMMODITY_WEIGHT_COPY_ITEM,
        payload: Object.assign({title: "1 x 20` Dry"}, item)
    }
}

export function fetchAutoComplite() {
    return fetch('http://comtrade.un.org/data/cache/classificationHS.json')
        .then(response => response.json())
}

export function setItem(item) {
    return {
        type: TYPE_COMMODITY_WEIGHT_SET_ITEM,
        payload: item
    }
}
