import { createAction } from "./helpers";


export const [
    CHECK_PREDS_EXIST_REQUEST,
    CHECK_PREDS_EXIST_RECEIVE,
    CHECK_PREDS_EXIST_ERROR,
    checkPredsExistRequest,
    checkPredsExistReceive,
    checkPredsExistError
] = createAction('CHECK_PREDS_EXIST')

export const checkPredsExist = (sport, time) => dispatch => {
    dispatch(checkPredsExistRequest())
    console.log('=== time', time)
    fetch('http://tommeredith01.pythonanywhere.com/check-day', {
        method: 'POST', 
        body: JSON.stringify({
            sport,
            time
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(r => {
        return r.json()
    }).then(r => 
        dispatch(checkPredsExistReceive(r.has_data ? r.data : []))
    ).catch(err => dispatch(checkPredsExistError(err)))
}


export const [
    CREATE_PREDS_REQUEST,
    CREATE_PREDS_RECEIVE,
    CREATE_PREDS_ERROR,
    createPredsRequest,
    createPredsReceive,
    createPredsError
] = createAction('CREATE_PREDS')

export const createPreds = (sport, time) => dispatch => {
    dispatch(createPredsRequest())

    fetch('http://tommeredith01.pythonanywhere.com/preds/run', {
    	method: 'POST',
    	body: JSON.stringify({ 
    		sport,
    		time
    	}),
    	headers: {
    		'Content-Type': 'application/json'
    	}
    }).then(r => 
        r.json()
    ).then(r => 
        dispatch(createPredsReceive(r.data))
    ).catch(err => dispatch(createPredsError(err)))
}


export const WIPE_PREDICTIONS = 'WIPE_PREDICTIONS'

export const wipePredictions = () => dispatch => dispatch({type: WIPE_PREDICTIONS})