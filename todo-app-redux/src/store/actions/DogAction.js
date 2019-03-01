export const FETCH_DOGS_BEGIN = 'FETCH_DOGS_BEGIN';
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS';
export const FETCH_DOGS_FAILURE = 'FETCH_DOGS_FAILURE';

export function fetchDogs() {
    const url = 'https://api.thedogapi.com/v1/images/search';
    
    return dispatch => {
        dispatch(fetchDogsBegin());
        return fetch(url)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                dispatch(fetchDogsSuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchDogsFailure(error)));
    };
}

export const fetchDogsBegin = () => ({
    type: FETCH_DOGS_BEGIN
});

export const fetchDogsSuccess = dogs => ({
    type: FETCH_DOGS_SUCCESS,
    payload: { dogs }
});

export const fetchDogsFailure = error => ({
    type: FETCH_DOGS_FAILURE,
    payload: { error }
})

// Handle HTTP errors since fetch won't.
function handleErrors(respone) {
    if (!respone.ok) {
        throw Error(respone.statusText);
    }
    return respone;
}