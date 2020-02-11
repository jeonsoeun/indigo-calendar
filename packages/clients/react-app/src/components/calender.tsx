import React from 'react'

import '../styles/components/calender.scss'
import CalendarHead from '../components/CalenderHead'
import CalendarBody from '../components/CalendarBody'

export const Calendar: React.FC<{}> = () => {
  return (
    <div className="Calendar">
      <CalendarHead></CalendarHead>
      <CalendarBody></CalendarBody>
    </div>
  )
}

export default Calendar
