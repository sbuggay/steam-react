import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import library from "./modules/library";

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

const reducer = combineReducers({
    library
});

const configureStore = (initialState: any) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;