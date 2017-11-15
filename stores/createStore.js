import {createStore, combineReducers, applyMiddleware} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/index';
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(logger,apiMiddleware)(createStore);

export default createStoreWithMiddleware(reducers);