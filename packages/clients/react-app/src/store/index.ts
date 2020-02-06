import { combineReducers } from 'redux'
import calendar from './calendar'

console.log(calendar)

const rootReducer = combineReducers({
  calendar,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
