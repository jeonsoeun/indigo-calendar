import React from 'react'

interface ICellProp {
  curMonth: number
  curDay: number
  isIncludedDay: boolean
  isSelected: boolean
}

export const CalendarCell: React.FC<ICellProp> = (props) => {
  return (
    <td className="cal-cell">
      <span className={`date-num ${props.isSelected && 'num-lite'}`}>
        <span className={`date-num-txt ${props.isIncludedDay && 'num-lite'}`}>
          {props.curDay}
        </span>
      </span>
    </td>
  )
}

export default CalendarCell
