import {combineReducers} from 'redux';
import paisesReducer from './paisesReducer';

export default combineReducers({
    paises:paisesReducer
})