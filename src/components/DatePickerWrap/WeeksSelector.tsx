import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { setWeek } from '../../store/actions/dateAndWeek.actions';
import { State } from '../../store/state.type';

const WeeksSelector = ({ sport, setWeek }) => {

    const [ weeks, setWeeks ] = useState([])

    useEffect(() => {
        let weekLen = 0,
            weeks = []
        switch (sport) {
            case 'epl':
                weekLen = 38
                break;

            case 'nfl':
                weekLen = 18
                break;

            case 'ncaaf':
                weekLen = 16
                break;
        
            default:
                break;

        }
        for (let index = 1; index <= weekLen; index++) {
            weeks.push({id: index, label: index})
        }
        setWeeks(weeks)

    }, [])

    return (
        <>
        <p>Week: </p>
        <select className="week-selector" onChange={(e) => setWeek(e.target.value)}>
            {weeks.map(week => <option value={week.id}>{week.label}</option>)}
        </select>
        </>
    )
}

export default connect(
    (state: State) => ({
        sport: state.sportOptions.sport
    }),
    (dispatch: any) => ({
        setWeek: (week) => dispatch(setWeek(week))
    })
)(WeeksSelector)