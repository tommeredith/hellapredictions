import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { AVAILABLE_SPORTS } from '../../constants/sports'
import { setSport } from '../../store/actions/sportOptions.actions'
import SportButton from './SportButton'


const SportOptions = ({ setSport }) => {    
    
    useEffect(() => {
        setSport(AVAILABLE_SPORTS.find(sport => sport.isActive).name)
    }, [])

    return (
        <div className="sports">
            {AVAILABLE_SPORTS.map((availSport, idx) => 
                <SportButton key={idx} availSport={availSport} />
            )}
        </div>
    )
}

export default connect(
    null,
    (dispatch: any) => ({
        setSport: (sport) => dispatch(setSport(sport)),
    })
)(SportOptions)