import React from 'react'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

import '../styles/components/calender.scss'
import CalendarHead from '../components/CalenderHead'
import CalendarBody from '../components/CalendarBody'

export const Calendar: React.FC<{}> = () => {
  const { year, month, day } = useSelector((state: RootState) => ({
    ...state.calendar,
  }))

  return (
    <div className="Calendar">
      <CalendarHead year={year} month={month} day={day}></CalendarHead>
      <CalendarBody></CalendarBody>
    </div>
  )
}

export default Calendar
