import { SET_SPORT } from "../actions/sportOptions.actions"

const initialState = {
    sport: 'nba'
}

export type sportOptionsStateType = {
    sport: any
}


export default (state = initialState, action) => {
    switch (action.type) {

        case SET_SPORT:
            return {
                ...state,
                sport: action.payload
            }

        default:
            return state
    }
}