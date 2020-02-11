import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelectedDate } from '../store/calendar'

interface ICellProp {
  curDate: Date
  selectedDate: Date
  today: Date
}

export const CalendarCell: React.FC<ICellProp> = (props) => {
  const dispatch = useDispatch()
  // const { curDay, isLastOfWeek, isIncludedDay, isSelected, isToday } = props
  const { selectedDate, curDate, today } = props
  const copyToday = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  )
  const curDay = curDate.getDate()
  const isLastOfWeek = curDate.getDay() === 6
  const isIncludedDay = curDate.getMonth() === selectedDate.getMonth()
  const isSelected =
    new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      selectedDate.getDate()
    ).toString() ===
    new Date(
      curDate.getFullYear(),
      curDate.getMonth(),
      curDate.getDate()
    ).toString()
  const isToday = curDate.toString() === copyToday.toString()

  function selectDay() {
    dispatch(setSelectedDate(new Date(curDate)))
  }
  return (
    <div
      className={`tbody-cell ${isLastOfWeek ? 'last-cell' : ''} ${
        isSelected ? 'selected' : ''
      } ${isToday ? 'today' : ''}`}
      onClick={selectDay}
    >
      <div className="date-num">
        <div className={`date-num-txt ${isIncludedDay ? '' : 'txt-lite'}`}>
          {curDay}
        </div>
      </div>
      <div className="contents"></div>
    </div>
  )
}

export default CalendarCell
