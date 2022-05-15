import React from 'react'
import { setSport } from '../../store/actions/sportOptions.actions'
import { wipePredictions } from '../../store/actions/predictions.actions'
import { compose } from '../../helpers/compose'
import { connect as connectStyles } from 'react-fela'
import { styles } from './styles'
import { connect } from 'react-redux'
import { State } from '../../store/state.type'
import { ACTIVE_SPORTS } from '../../constants/sports'

const SportButton = ({availSport, currentSport, styles, setSport, wipePredictions}) => {

    return (
        <button  
            onClick={() => {
                setSport(availSport)
                wipePredictions()
            }} 
            className={styles.button}
            disabled={!ACTIVE_SPORTS[availSport]}
        >
            {availSport.toUpperCase()}
        </button>
    )
}

export default compose(
    connect(
        (state: State) => ({
            currentSport: state.sportOptions.sport
        }),
        (dispatch: any) => ({
            setSport: (sport) => dispatch(setSport(sport)),
            wipePredictions: () => dispatch(wipePredictions())
        })
    ),
    connectStyles(styles)
)(SportButton)