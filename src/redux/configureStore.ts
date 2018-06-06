import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "react-router-redux";
import logger from "redux-logger";
import { createBrowserHistory } from "history";

import libraryReducer, { loadGameSaga, loadGameDetailSaga } from "./modules/library";
import storeReducer, { loadFeaturedSaga } from "./modules/store";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    library: libraryReducer,
    store: storeReducer
});

export const history = createBrowserHistory();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
)

sagaMiddleware.run(loadGameSaga);
sagaMiddleware.run(loadGameDetailSaga);
sagaMiddleware.run(loadFeaturedSaga);

export default store;