import React from 'react'
import { connect } from 'react-redux'
import { State } from '../../store/state.type'
import { AVAILABLE_SPORTS } from '../../constants/sports'
import { setSport } from '../../store/actions/sportOptions.actions'
import { wipePredictions } from '../../store/actions/predictions.actions'


const SportOptions = ({ setSport, sport, wipePredictions }) => {    
    
    return (
        <div className="sports">
            {AVAILABLE_SPORTS.map((availSport, idx) => <div key={idx} onClick={() => {
                setSport(availSport)
                wipePredictions()
                }} className={sport === availSport ? 'active' : ''}>{availSport.toUpperCase()}</div>)}
        </div>
    )
}

export default connect(
    (state: State) => ({
        sport: state.sportOptions.sport
    }),
    (dispatch: any) => ({
        setSport: (sport) => dispatch(setSport(sport)),
        wipePredictions: () => dispatch(wipePredictions())
    })
)(SportOptions)