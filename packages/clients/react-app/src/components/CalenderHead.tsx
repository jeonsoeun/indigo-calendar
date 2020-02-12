import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { setCurrentMonth, setSelectedDate } from '../store/calendar'

const CalendarHead: React.FC<{}> = () => {
  const { selectedDate, today } = useSelector((state: RootState) => ({
    ...state.calendar,
  }))
  const dispatch = useDispatch()

  const year = selectedDate.getFullYear()
  const month = selectedDate.getMonth()

  const nextMonth = () => {
    dispatch(setCurrentMonth(month + 1))
  }
  const prevMonth = () => {
    dispatch(setCurrentMonth(month - 1))
  }

  const showToday = () => {
    dispatch(setSelectedDate(new Date(today)))
  }
  return (
    <div className="CalendarHead">
      <button className="btn-turn prev" onClick={(e) => prevMonth()}>
        {'<'}
      </button>
      <span className="month">
        {month + 1}
        <span className={`small korean`}>{`월`}</span>
      </span>
      <span className="year">{year}</span>
      <button className="btn-turn next" onClick={(e) => nextMonth()}>
        {'>'}
      </button>
      <button
        type="button"
        className="btn-today btn btn-outline-secondary btn-sm"
        onClick={() => showToday()}
      >
        오늘
      </button>
    </div>
  )
}

export default CalendarHead
