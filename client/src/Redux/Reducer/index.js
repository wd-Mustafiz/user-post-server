import {combineReducers} from 'redux'
import posts from './posts'
import currentId from './cureentId'
export default combineReducers({
    posts,currentId
})