import React from 'react'

import { AVAILABLE_SPORTS } from '../../constants/sports'
import SportButton from './SportButton'


const SportOptions = () => {    
    
    return (
        <div className="sports">
            {AVAILABLE_SPORTS.map((availSport, idx) => 
                <SportButton key={idx} availSport={availSport} />
            )}
        </div>
    )
}

export default SportOptions