
   
import { combineReducers } from "redux";
import predictions from './predictions'
import sportOptions from './sportOptions'
import dateAndWeek from './dateAndWeek'

export const rootReducer = combineReducers({
    predictions,
    sportOptions,
    dateAndWeek
});