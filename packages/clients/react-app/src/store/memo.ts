// 액션 타입정의
const SET_NEW_MEMO = 'memo/setCurrentMonth' as const

// 액션 함수정의
type MemoAction = ReturnType<typeof setNewMemo>

export const setNewMemo = (newMonth: number) => ({
  type: SET_NEW_MEMO,
  newMonth,
})

/*** 리듀서 ***/
// 초기상태 정의
type MemoState = {
  date: Date
  title: string
}
const date = new Date()
const initState: MemoState = {
  date: date,
  title: '',
}
const memo = (state: MemoState = initState, action: MemoAction) => {
  switch (action.type) {
    case SET_NEW_MEMO:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default memo
