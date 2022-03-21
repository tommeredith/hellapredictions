import { CHECK_PREDS_EXIST_RECEIVE, CHECK_PREDS_EXIST_REQUEST, CREATE_PREDS_RECEIVE, CREATE_PREDS_REQUEST, WIPE_PREDICTIONS } from "../actions/predictions.actions"

const initialState = {
    predictions: [],
    hasChecked: false,
    loading: false
}

export type predictionsStateType = {
    predictions: Array<any>,
    hasChecked: boolean,
    loading: boolean
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PREDS_REQUEST:
        case CHECK_PREDS_EXIST_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_PREDS_RECEIVE:
            return {
                ...state,
                predictions: action.payload,
                loading:false
            }

        case CHECK_PREDS_EXIST_RECEIVE:
            return {
                ...state,
                hasChecked: true,
                predictions: action.payload,
                loading: false
            }

        case WIPE_PREDICTIONS:
            return {
                ...state,
                predictions: [],
                hasChecked: false
            }

        default:
            return state
    }
}