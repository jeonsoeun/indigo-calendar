import React from 'react'

interface ICellProp {
  curDate: Date
  selectedDate: Date
  today: Date
}

export const CalendarCell: React.FC<ICellProp> = (props) => {
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
  return (
    <div
      className={`tbody-cell ${isLastOfWeek ? 'last-cell' : ''} ${
        isSelected ? 'selected' : ''
      } ${isToday ? 'today' : ''}`}
    >
      <div className="date-num">
        <div className={`date-num-txt ${isIncludedDay ? 'txt-lite' : ''}`}>
          {curDay}
        </div>
      </div>
    </div>
  )
}

export default CalendarCell
