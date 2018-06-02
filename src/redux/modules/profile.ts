// import { put, takeLatest, call, select } from 'redux-saga/effects'

export const LOAD_GAME_LIST = "LOAD_GAME_LIST";

// export function* loadGameDetailSaga() {
//     yield takeLatest(SELECT_GAME, loadGameDetail);
// }

// const initialState: IProfileState = {
//     loading: false,
//     gameList: [],
//     gameDetail: {},
//     selected: -1,
//     selectedId: ""
// };

export default function reducer(state = {}, action: any) {
    switch (action.type) {
        case LOAD_GAME_LIST:
            return Object.assign({}, state, {
                loading: true,
                gameList: []
            });

        default:
            return state;
    }
}