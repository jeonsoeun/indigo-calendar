import { combineReducers } from 'redux'
import calendar from './calendar'
import memo from './memo'

const rootReducer = combineReducers({
  calendar,
  memo,
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
