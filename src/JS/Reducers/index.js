import { combineReducers } from "redux";
import ListReducer from './ProductReducer'
import MovieReducer from './MovieReducer'
import TaskReducer from './TaskReducer'

const rootReducer=combineReducers({ListReducer,MovieReducer,TaskReducer})
export default rootReducer