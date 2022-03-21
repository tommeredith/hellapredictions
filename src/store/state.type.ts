import { dateAndWeekStateType } from './reducers/dateAndWeek'
import { predictionsStateType } from './reducers/predictions'
import { sportOptionsStateType } from './reducers/sportOptions'

export type State = {
    sportOptions: sportOptionsStateType,
    predictions: predictionsStateType,
    dateAndWeek: dateAndWeekStateType
}