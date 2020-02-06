import React from 'react'

interface IProp {
  year: number
  month: number
  day: number
}

const CalendarHead: React.FC<IProp> = (props) => {
  return (
    <div className="CalendarHead">
      <button className="btn-prev">{'<'}</button>
      <span className="month">{props.month}</span>
      <span className="year">{props.year}</span>
      <button className="btn-next">{'>'}</button>
    </div>
  )
}

export default CalendarHead
