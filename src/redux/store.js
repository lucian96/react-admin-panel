import {createStore} from 'redux';
import {changeColorReducer} from './reducers/color';

const store = createStore(changeColorReducer);

export default store;