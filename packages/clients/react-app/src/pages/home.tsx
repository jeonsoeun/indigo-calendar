import React from 'react'
import '../styles/pages/home.scss'
import Calendar from '../components/Calender'

interface IState {
  today: Date
  year: number
  month: number
  day: number
  selectedDate: Date
}

export default class Home extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      today: new Date(),
      year: 0,
      month: 0,
      day: 0,
      selectedDate: new Date(),
    }
  }
  render() {
    return (
      <div className="Home">
        <Calendar
          year={this.state.year}
          month={this.state.month}
          day={this.state.day}
          today={this.state.today}
          selectedDate={this.state.selectedDate}
        ></Calendar>
      </div>
    )
  }

  componentDidMount() {
    const today = new Date()
    this.setState({
      today: today,
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
      selectedDate: today,
    })
  }
}
