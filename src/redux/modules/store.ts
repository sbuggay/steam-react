import { put, takeLatest, call } from "redux-saga/effects";

// enum EState {
//     CLEAN,
//     LOADING,
//     LOADED
// }

export const LOAD_FEATURED = "LOAD_FEATURED";
export const LOAD_FEATURED_SUCCESS = "LOAD_FEATURED_SUCCESS";
export const LOAD_FEATURED_FAILURE = "LOAD_FEATURED_FAILURE";

export function* loadFeatured(action: any) {
    try {
        const response = yield call(fetch, `http://localhost:8080/featured`);
        const json = yield response.json();
        yield put({ type: LOAD_FEATURED_SUCCESS, payload: json });
    } catch (e) {
        yield put({ type: LOAD_FEATURED_FAILURE });
    }
}

export function* loadFeaturedSaga() {
    yield takeLatest(LOAD_FEATURED, loadFeatured);
}

export default function reducer(state = {}, action: any) {
    switch (action.type) {
        case LOAD_FEATURED:
            return Object.assign({}, state, {
                loading: true,
                featured: {}
            });
        case LOAD_FEATURED_SUCCESS:
            return Object.assign({}, state, {
                featured: action.payload
            });
        case LOAD_FEATURED_FAILURE:
            return Object.assign({}, state, {
                featured: {}
            });

        default:
            return state;
    }
}