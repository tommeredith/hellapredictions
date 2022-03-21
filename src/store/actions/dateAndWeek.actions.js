
export const SET_FORMATTED_DATE = 'SET_FORMATTED_DATE'

export const setFormattedDate = (date) => dispatch => dispatch({type: SET_FORMATTED_DATE, payload: date})

export const SET_WEEK = 'SET_WEEK'

export const setWeek = (week) => dispatch => dispatch({type: SET_WEEK, payload: week})