import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SPORTS_DATE_TYPE } from '../../constants/sports'
import { checkPredsExist, createPreds } from '../../store/actions/predictions.actions'
import { State } from '../../store/state.type'
import Loading from '../Loading'

const ActionButton = ({ predictions, sport, createPreds, week, date, hasChecked, checkPredsExist, predLoading }) => {
    const [ message, setMessage ] = useState('')
    const [ buttonText, setButtonText ] = useState('')

    useEffect(() => {
        if ( hasChecked && predictions.length === 0 ) {
            setMessage("Looks like there aren't predictions for this time yet. You wanna make 'em?")
            setButtonText("Create Predictions for Today")
        } else if (!hasChecked) {
            setMessage(`You wanna see what we got for that ${SPORTS_DATE_TYPE[sport]}?`)
            setButtonText("Check for predictions")
        }
    }, [hasChecked, predictions, sport])

    return predLoading ? <Loading /> : (
        <>
            {predictions.length === 0 && (
                <>
                    <p>{message}</p>
                    <button onClick={() => hasChecked ? createPreds(sport, SPORTS_DATE_TYPE[sport] === 'week' ? week : date) : checkPredsExist(sport,  SPORTS_DATE_TYPE[sport] === 'week' ? week : date)}>
                       {buttonText}
                    </button>
                </>
            )}
        </>
    )
}


export default connect(
    (state: State) => ({
        predictions: state.predictions.predictions,
        sport: state.sportOptions.sport,
        date: state.dateAndWeek.formattedDate,
        week: state.dateAndWeek.week,
        hasChecked: state.predictions.hasChecked,
        predLoading: state.predictions.loading
    }),
    (dispatch: any) => ({
        createPreds: (sport, date) => dispatch(createPreds(sport, date)),
        checkPredsExist: (sport, date) => dispatch(checkPredsExist(sport, date))
    })
)(ActionButton)