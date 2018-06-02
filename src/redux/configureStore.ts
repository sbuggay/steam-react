import { createStore, applyMiddleware, combineReducers } from "redux";

import createSagaMiddleware from "redux-saga";

import library, { loadGameSaga, loadGameDetailSaga } from "./modules/library";
// create the saga middleware

import { routerMiddleware } from "react-router-redux";

import logger from "redux-logger";
import { createBrowserHistory } from "history";

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    library
});

export const history = createBrowserHistory();

const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger, routerMiddleware(history))
)

sagaMiddleware.run(loadGameSaga);
sagaMiddleware.run(loadGameDetailSaga);

export default store;