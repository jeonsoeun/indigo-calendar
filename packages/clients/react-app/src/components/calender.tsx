import React from 'react'
import '../styles/components/calender.scss'
import CalendarHead from '../components/CalenderHead'
import CalendarCell from '../components/CalendarCell'

interface IProp {
  year: number
  month: number
  day: number
  selectedDate: Date
  today: Date
}

export const Calendar: React.FC<IProp> = (props) => {
  const week = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat']

  const makeTableCell = (curDate: Date) => {
    const dateTable = []
    for (let d = 0; d < 7; d++) {
      const curDay = curDate.getDate()
      const curMonth = curDate.getMonth() + 1
      dateTable.push(
        <CalendarCell
          curMonth={curMonth}
          curDay={curDay}
          isIncludedDay={curMonth === props.month}
          isSelected={props.selectedDate === curDate}
          key={curDay + 10 * curMonth}
        ></CalendarCell>
      )
      curDate.setDate(curDate.getDate() + 1)
    }
    return dateTable
  }

  const weekTable = []
  const curDate = new Date(props.year, props.month - 1, 1)
  curDate.setDate(-curDate.getDay())
  curDate.setDate(curDate.getDate() + 1)
  for (let w = 0; w < 6; w++) {
    weekTable.push(
      <tr className="cb-tr" key={w}>
        {makeTableCell(curDate)}
      </tr>
    )
  }

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
            {week.map((w, i) => {
              return (
                <th className="ch-tr" key={i}>
                  {w}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>{weekTable}</tbody>
      </table>
    </div>
  )
}

export default Calendar
