import { combineReducers } from 'redux'
import uiHome from './ui-Home/reducers'
import restaurant from './restaurant/reducers'

export default combineReducers({
    uiHome,
    restaurant
}); 