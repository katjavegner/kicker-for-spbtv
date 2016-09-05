import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

export default store;
