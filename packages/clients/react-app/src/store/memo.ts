import { yyyymmdd } from '../utill/dateUtill'

// static data
export const LABELS = [
  'red',
  'coral',
  'gold',
  'oliveDrab',
  'royalBlue',
  'indigo',
]

// 메모 타입
export type Memo = {
  date: Date
  title: string
  contents: string
  label: string
}

// 액션 타입정의
const SET_NEW_MEMO = 'memo/setCurrentMonth' as const
const SET_SELECTED_MEMO = 'memo/setSelectedMemo' as const

// 액션 함수정의
type MemoAction =
  | ReturnType<typeof setNewMemo>
  | ReturnType<typeof setSelectedMemo>

export const setNewMemo = (newMemo: Memo) => {
  if (!newMemo.title) {
    newMemo.title = '(제목없음)'
  }
  return {
    type: SET_NEW_MEMO,
    newMemo,
  }
}

export const setSelectedMemo = (mapKey: string, arrayIndex: number) => {
  return {
    type: SET_SELECTED_MEMO,
    mapKey,
    arrayIndex,
  }
}

/*** 리듀서 ***/
// 초기상태 정의
type MemoState = {
  memoList: Map<string, Memo[]>
  selectedMemo: Memo | null
}
const testMemo: Memo = {
  date: new Date(),
  title: '제목!',
  contents: '내용!!',
  label: 'red',
}
const testMap = new Map()
testMap.set(yyyymmdd(testMemo.date), [testMemo])
const initState: MemoState = {
  memoList: testMap,
  selectedMemo: null,
}
const memo = (state: MemoState = initState, action: MemoAction) => {
  switch (action.type) {
    case SET_NEW_MEMO:
      let dailyMemoList = state.memoList.get(yyyymmdd(action.newMemo.date))
      if (dailyMemoList) {
        dailyMemoList.push(action.newMemo)
      } else dailyMemoList = [action.newMemo]
      return {
        ...state,
        memoList: state.memoList.set(
          yyyymmdd(action.newMemo.date),
          dailyMemoList
        ),
      }
    case SET_SELECTED_MEMO:
      const memoList = state.memoList.get(action.mapKey)
      return {
        ...state,
        selectedMemo: memoList ? memoList[action.arrayIndex] : null,
      }
    default:
      return state
  }
}

export default memo
