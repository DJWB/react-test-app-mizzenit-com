import fetch from "isomorphic-fetch";

export const TYPE_AUTOCOMPLETE_LOADED = 'TYPE_AUTOCOMPLETE_LOADED';
export const TYPE_AUTOCOMPLETE_EMPTY = 'TYPE_AUTOCOMPLETE_EMPTY';
export const TYPE_AUTOCOMPLETE_LOADING = 'TYPE_AUTOCOMPLETE_LOADING';


export function load() {

    return dispatch => {

        dispatch({
            type: TYPE_AUTOCOMPLETE_LOADING,
            items: []
        });

        fetchAutoComplite()
            .then(json => {
                dispatch(loadedData(json))
            });

        return null;


    }
}

export function loadedData(result) {
    return {
        type: TYPE_AUTOCOMPLETE_LOADED,
        items: result.results
    }
}

export function fetchAutoComplite() {
    return fetch("/api")
        .then(response => response.json())

}
