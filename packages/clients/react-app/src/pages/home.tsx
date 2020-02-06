import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/pages/home.scss'
import Calendar from '../components/Calender'
import { RootState } from '../store'

export const Home: React.FC<{}> = () => {
  const { today, year, month, day, selectedDate } = useSelector(
    (state: RootState) => ({
      ...state.calendar,
    })
  )
  return (
    <div className="Home">
      <Calendar
        year={year}
        month={month}
        day={day}
        today={today}
        selectedDate={selectedDate}
      ></Calendar>
    </div>
  )
}

export default Home
