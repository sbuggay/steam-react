import { put, takeLatest, call, select } from "redux-saga/effects";

interface INewsItem {
    gid: string;
    title: string;
    url: string;
    author: string;
    contents: string;
    feedlabel: string;
    date: number;
    feedname: string;
    feed_type: number;
    app_id: number;
}

interface INewsItems extends Array<INewsItem> { };

interface IRecentNews {
    appid: number;
    appnews?: {
        appid: number;
        newsitems: INewsItems,
        count: number;
    }
}

interface IGame {
    appid: string;
    name: string;
    playtime_forever: number;
    img_icon_url: string;
    img_logo_url: string;
    has_community_visible_stats: boolean;
    details: {
        recentnews: IRecentNews;
        achievements: any;
    }
}

export interface ILibraryState {
    loading: boolean;
    gameList: IGame[];
    gameDetail: any;
    selected: number;
    selectedId: string;
}

export const LOAD_GAME_LIST = "LOAD_GAME_LIST";
export const LOAD_GAME_LIST_SUCCESS = "LOAD_GAME_LIST_SUCCESS";
export const LOAD_GAME_LIST_FAILURE = "LOAD_GAME_LIST_FAILURE";

export const SELECT_GAME = "SELECT_GAME";

export const LOAD_GAME_DETAIL = "LOAD_GAME_DETAIL";
export const LOAD_GAME_DETAIL_SUCCESS = "LOAD_GAME_DETAIL";
export const LOAD_GAME_DETAIL_FAILURE = "LOAD_GAME_DETAIL";

export function* loadGameList(action: any) {
    try {
        const response = yield call(fetch, `http://localhost:8080/gameList/${action.payload}`);
        const json = yield response.json();
        const games = json.response.games.sort((a: IGame, b: IGame) => (a.name <= b.name) ? -1 : 1);
        yield put({ type: LOAD_GAME_LIST_SUCCESS, payload: games });
    } catch (e) {
        yield put({ type: LOAD_GAME_LIST_FAILURE });
    }
}

export function* loadGameDetail(action: any) {
    try {
        const state = yield select();
        const appid = state.library.gameList[state.library.selected].appid;
        const newsRes = yield call(fetch, `http://localhost:8080/steamNews/${appid}`);
        const news = yield call([newsRes, "json"]);
        const statsRes = yield call(fetch, `http://localhost:8080/achievements/76561198020399899?appid=${appid}`);
        const stats = yield statsRes.json();

        yield put({
            type: LOAD_GAME_DETAIL_SUCCESS, payload: {
                appid,
                news: news.appnews,
                playerstats: stats.playerstats
            }
        });
    } catch (e) {
        yield put({ type: LOAD_GAME_DETAIL_FAILURE });
    }
}

export function* loadGameSaga() {
    yield takeLatest(LOAD_GAME_LIST, loadGameList);
}

export function* loadGameDetailSaga() {
    yield takeLatest(SELECT_GAME, loadGameDetail);
}

const initialState: ILibraryState = {
    loading: false,
    gameList: [],
    gameDetail: {},
    selected: -1,
    selectedId: ""
};

export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case LOAD_GAME_LIST:
            return Object.assign({}, state, {
                loading: true,
                gameList: []
            });
        case LOAD_GAME_LIST_SUCCESS:
            return Object.assign({}, state, {
                gameList: action.payload
            });
        case LOAD_GAME_LIST_FAILURE:
            return Object.assign({}, state, {
                gameList: []
            });
        case SELECT_GAME:
            return Object.assign({}, state, {
                selected: action.payload
            });
        case LOAD_GAME_DETAIL_SUCCESS:
            return Object.assign({}, state, {
                gameDetail: Object.assign({}, state.gameDetail, {
                    [action.payload.appid]: {
                        news: action.payload.news,
                        stats: action.payload.playerstats
                    }
                })
            });

        default:
            return state;
    }
}