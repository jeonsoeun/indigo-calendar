// 액션 타입정의
const SET_NEW_MEMO = 'memo/setCurrentMonth' as const

// 액션 함수정의
type MemoAction = ReturnType<typeof setNewMemo>

export type MemoList = {
  date: Date
  title: string
  contents: string
  label: string
}

export const setNewMemo = (newMemo: MemoList) => {
  if (!newMemo.title) {
    newMemo.title = '(제목없음)'
  }
  return {
    type: SET_NEW_MEMO,
    newMemo,
  }
}

/*** 리듀서 ***/
// 초기상태 정의
type MemoState = {
  memoList: Map<number, MemoList>
}
const testMemo: MemoList = {
  date: new Date(),
  title: '제목!',
  contents: '내용!!',
  label: 'red',
}
const testMap = new Map()
testMap.set(testMemo.date.getTime(), testMemo)
const initState: MemoState = {
  memoList: testMap,
}
console.log(initState)
const memo = (state: MemoState = initState, action: MemoAction) => {
  switch (action.type) {
    case SET_NEW_MEMO:
      return {
        ...state,
        memo: action.newMemo,
      }
    default:
      return state
  }
}

export default memo
