import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { setFormattedDate, setWeek } from '../../store/actions/dateAndWeek.actions';
import { State } from '../../store/state.type'
import { SPORTS_DATE_TYPE } from '../../constants/sports';
import DateSelector from './DateSelector';
import WeeksSelector from './WeeksSelector';


const DatePickerWrapper = ({
    sport
}) => {

    const [ sportUsesWeeks, setSportUsesWeeks ] = useState(false)
    
	useEffect(() => {
        setSportUsesWeeks(SPORTS_DATE_TYPE[sport] === 'week')
	}, [sport])


    return (
        <>
            {sportUsesWeeks ? <WeeksSelector /> : <DateSelector />}
        </>
    )
}

export default connect(
    (state: State) => ({
        sport: state.sportOptions.sport,
    }),
    (dispatch: any) => ({
        setWeek: (week) => dispatch(setWeek(week)),
        setFormattedDate: (date) => dispatch(setFormattedDate(date))
    })
)(DatePickerWrapper)