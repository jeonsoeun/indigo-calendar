import React from 'react'

interface ICellProp {
  curDay: number
  isLastOfWeek: boolean
  isIncludedDay: boolean
  isSelected: boolean
  isToday: boolean
}

export const CalendarCell: React.FC<ICellProp> = (props) => {
  const { curDay, isLastOfWeek, isIncludedDay, isSelected, isToday } = props
  return (
    <div
      className={`tbody-cell ${isLastOfWeek ? 'last-cell' : ''} ${
        isSelected ? 'selected' : ''
      } ${isToday ? 'today' : ''}`}
    >
      <span className="date-num">
        <span className={`date-num-txt ${isIncludedDay ? 'txt-lite' : ''}`}>
          {curDay}
        </span>
      </span>
    </div>
  )
}

export default CalendarCell
