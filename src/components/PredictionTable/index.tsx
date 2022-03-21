import React from 'react'
import { connect } from 'react-redux'
import { LOGOS_NAME_MAP } from '../../constants/teamLogos'
import { unformatDate } from '../../helpers/formatDate'
import { createPreds } from '../../store/actions/predictions.actions'
import { State } from '../../store/state.type'
import './styles.css'

const PredictionTable = ({predictions, sport, week, date}) => {

    return (
        <>
            {predictions.length > 0 && <h3>{sport === 'nba' ? `Predictions for ${unformatDate(date).toDateString()}` : `Week ${week} Predictions`}</h3>}
            {predictions.length > 0 ? (
                <div>

                    {predictions.map((pred, index) => (
                        <div key={index} className="prediction">
                            
                            <div className="prediction__team team1">
                                <div className='prediction__team__logo'>
                                    <img alt={pred.team1} src={`team_logos/${sport}/${LOGOS_NAME_MAP[sport][pred.team1]}.png`} />
                                    <div className="team-name">{pred.team1}</div>
                                </div>
                                <div className="prediction__team__pred">
                                    <div className="pred-pct">
                                        {pred.team1_prediction.toFixed(2)} %
                                    </div>
                                    <div>
                                        {pred.team1_odds > 0 ? `+${pred.team1_odds}` : pred.team1_odds}
                                    </div>
                                </div>
                            </div>
                            {sport === 'epl' && (
                                <div className="prediction__team draw">
                                    <div>
                                        Draw
                                    </div>
                                    <div className="pred-pct">
                                        {pred.draw_prediction.toFixed(2)} %
                                    </div>
                                    <div>
                                        {pred.draw_odds > 0 ? `+${pred.draw_odds}` : pred.draw_odds}
                                    </div>
                                </div>
                            )}
                            <div className="prediction__team team2">
                                <div className="prediction__team__logo">
                                    <img alt={pred.team2} src={`team_logos/${sport}/${LOGOS_NAME_MAP[sport][pred.team2]}.png`} />
                                    <div className="team-name">{pred.team2}</div>
                                </div>
                                <div className="prediction__team__pred">
                                    <div className="pred-pct">
                                        {pred.team2_prediction.toFixed(2)} %
                                    </div>
                                    <div>
                                        {pred.team2_odds > 0 ? `+${pred.team2_odds}` : pred.team2_odds}
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
            ) : 
            <div></div>
            }
        </>
    )
}

export default connect(
    (state: State) => ({
        predictions: state.predictions.predictions,
        sport: state.sportOptions.sport,
        week: state.dateAndWeek.week,
        date: state.dateAndWeek.formattedDate
    }),
    (dispatch: any) => ({
        createPreds: () => dispatch(createPreds())
    })
)(PredictionTable)