import React from 'react'
import '../styles/pages/home.scss'
import Calendar from '../components/Calender'

export const Home: React.FC<{}> = () => {
  return (
    <div className="Home">
      <Calendar></Calendar>
    </div>
  )
}

export default Home
