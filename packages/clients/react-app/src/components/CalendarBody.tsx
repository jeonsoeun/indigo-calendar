import React from 'react'
import '../styles/components/calender.scss'
import CalendarCell from '../components/CalendarCell'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const Calendar: React.FC<{}> = () => {
  const { year, month, selectedDate } = useSelector((state: RootState) => ({
    ...state.calendar,
  }))

  const makeTableCell = (curDate: Date) => {
    const dateTable = []
    for (let d = 0; d < 7; d++) {
      const curDay = curDate.getDate()
      const curMonth = curDate.getMonth() + 1
      dateTable.push(
        <CalendarCell
          curMonth={curMonth}
          curDay={curDay}
          isIncludedDay={curMonth === month}
          isSelected={selectedDate === curDate}
          key={curDay + 10 * curMonth}
        ></CalendarCell>
      )
      curDate.setDate(curDate.getDate() + 1)
    }
    return dateTable
  }

  const tableRows = []
  const curDate = new Date(year, month - 1, 1)
  curDate.setDate(-curDate.getDay())
  curDate.setDate(curDate.getDate() + 1)
  for (let w = 0; w < 6; w++) {
    tableRows.push(
      <tr className="cb-tr" key={w}>
        {makeTableCell(curDate)}
      </tr>
    )
  }

  return (
    <table className="CalendarBody table-bordered">
      <thead>
        <tr>
          {['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'].map((w, i) => {
            /* prettier-ignore */
            return  <th className="ch-tr" key={i}>{w}</th>
          })}
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </table>
  )
}

export default Calendar
