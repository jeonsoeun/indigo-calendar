import React from 'react'
import '../styles/components/calender.scss'
import CalendarCell from '../components/CalendarCell'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

export const Calendar: React.FC<{}> = () => {
  const { selectedDate, today } = useSelector((state: RootState) => ({
    ...state.calendar,
  }))

  const year = selectedDate.getFullYear()
  const month = selectedDate.getMonth()

  const makeTableCell = (curDate: Date) => {
    const dateTable = []
    for (let d = 0; d < 7; d++) {
      const curDay = curDate.getDate()
      const curMonth = curDate.getMonth() + 1
      const todayCopy = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      )
      dateTable.push(
        <CalendarCell
          curDay={curDay}
          isLastOfWeek={curDate.getDay() === 6}
          isIncludedDay={curMonth === month}
          isSelected={selectedDate === curDate}
          isToday={curDate.toString() === todayCopy.toString()}
          key={curDay + 10 * curMonth}
        ></CalendarCell>
      )
      curDate.setDate(curDate.getDate() + 1)
    }
    return dateTable
  }

  const tableRows = []
  const curDate = new Date(year, month, 1)
  curDate.setDate(-curDate.getDay())
  curDate.setDate(curDate.getDate() + 1)
  for (let w = 0; w < 6; w++) {
    tableRows.push(
      <div className="tbody-row" key={w}>
        {makeTableCell(curDate)}
      </div>
    )
  }

  return (
    <div className="CalendarBody ">
      <div className="thead ">
        <div className="thead-row">
          {['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'].map((w, i) => {
            /* prettier-ignore */
            return <div className={`thead-cell ${i===6? 'last-cell' : ''}`} key={i}>{w}</div>
          })}
        </div>
      </div>
      <div className="tbody">{tableRows}</div>
    </div>
  )
}

export default Calendar
