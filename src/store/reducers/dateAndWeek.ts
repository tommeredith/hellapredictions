import { formatDate } from "../../helpers/formatDate"
import { SET_FORMATTED_DATE, SET_WEEK } from "../actions/dateAndWeek.actions"


const initialState = {
    formattedDate: formatDate(new Date()),
    week: null
}

export type dateAndWeekStateType = {
    formattedDate: any,
    week: any
}

const STATE = (state = initialState, action) => {
    switch (action.type) {
        case SET_FORMATTED_DATE:
            return {
                ...state,
                formattedDate: action.payload
            }
        case SET_WEEK:
            return {
                ...state,
                week: action.payload
            }
        default:
            return state
    }
}

export default STATE