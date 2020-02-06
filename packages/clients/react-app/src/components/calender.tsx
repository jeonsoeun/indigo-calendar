import React from 'react'
import '../styles/components/calender.scss'
import CalendarHead from '../components/CalenderHead'

interface IProp {
  year: number
  month: number
  day: number
  selectedDay: number
  today: Date
}

export const Calendar: React.FC<IProp> = (props) => {
  const week = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']
  return (
    <div className="Calendar">
      <CalendarHead
        year={props.year}
        month={props.month}
        day={props.day}
      ></CalendarHead>
      <table>
        <thead>
          <tr>
            {week.map((w) => {
              return <th>{w}</th>
            })}
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default Calendar
