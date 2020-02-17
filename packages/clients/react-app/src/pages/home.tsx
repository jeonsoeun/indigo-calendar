import React from 'react'
import '../styles/pages/home.scss'
import Calendar from '../components/Calender'
import MemoListModal from '../components/MemoListModal'

export const Home: React.FC<{}> = () => {
  return (
    <div className="Home">
      <Calendar></Calendar>
      <MemoListModal></MemoListModal>
    </div>
  )
}

export default Home
