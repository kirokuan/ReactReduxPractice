import {createStore, combineReducers, applyMiddleware} from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import createSocketIoMiddleware from 'redux-socket.io';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/index';
import io from 'socket.io-client';
const port=require('../config').wsPort;
const socketUrl='http://localhost:'+port;
console.log(`connect to ${socketUrl}`);
const logger = createLogger();
const socket = io(socketUrl);
const socketIoMiddleware = createSocketIoMiddleware(socket, "server/");
const createStoreWithMiddleware = applyMiddleware(logger,apiMiddleware,socketIoMiddleware)(createStore);

export default createStoreWithMiddleware(reducers);