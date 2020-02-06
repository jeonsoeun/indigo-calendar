// 액션 타입정의
const SET_CURRENT_MONTH = 'calendar/setCurrentMonth' as const
const SET_SELECTED_DATE = 'calendar/setSelectedDate' as const

// 액션 함수정의
type CalendarAction =
  | ReturnType<typeof setCurrentMonth>
  | ReturnType<typeof setSelectedDate>

export const setCurrentMonth = (newMonth: number) => ({
  type: SET_CURRENT_MONTH,
  newMonth,
})
export const setSelectedDate = (newDate: Date) => ({
  type: SET_SELECTED_DATE,
  newDate,
})

/*** 리듀서 ***/
// 초기상태 정의
type CalendarState = {
  year: number
  month: number
  day: number
  selectedDate: Date
  today: Date
}
const today = new Date()
const initState: CalendarState = {
  year: today.getFullYear(),
  month: today.getMonth() + 1,
  day: today.getDate(),
  selectedDate: today,
  today: today,
}
const calendar = (state: CalendarState = initState, action: CalendarAction) => {
  switch (action.type) {
    case SET_CURRENT_MONTH:
      return {
        ...state,
        month: action.newMonth,
      }
    case SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.newDate,
      }
    default:
      return state
  }
}

export default calendar
