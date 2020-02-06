import React from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentMonth } from '../store/calendar'

interface IProp {
  year: number
  month: number
  day: number
}

const CalendarHead: React.FC<IProp> = (props) => {
  const dispatch = useDispatch()
  const nextMonth = () => {
    dispatch(setCurrentMonth(props.month + 1))
  }
  const prevMonth = () => {
    dispatch(setCurrentMonth(props.month - 1))
  }
  return (
    <div className="CalendarHead">
      <button className="btn-prev" onClick={(e) => prevMonth()}>
        {'<'}
      </button>
      <span className="month">{props.month}</span>
      <span className="year">{props.year}</span>
      <button className="btn-next" onClick={(e) => nextMonth()}>
        {'>'}
      </button>
    </div>
  )
}

export default CalendarHead
