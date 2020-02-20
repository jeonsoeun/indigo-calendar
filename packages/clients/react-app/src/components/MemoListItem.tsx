import React from 'react'
import { useDispatch } from 'react-redux'
import { Memo, setSelectedMemo } from '../store/memo'
import { yyyymmdd } from '../utill/dateUtill'
import { withRouter, RouteComponentProps } from 'react-router'

interface MemoListItemProp extends RouteComponentProps {
  memo: Memo
  index: number
  key: string
}

export const MemoListItem: React.FC<MemoListItemProp> = (props) => {
  const { memo, index } = props
  const dispacth = useDispatch()
  const handleClickItem = () => {
    dispacth(setSelectedMemo(yyyymmdd(memo.date), index))
    props.history.push('/editor')
  }
  return (
    <div
      className="MemoListItem list-group-item list-group-item-action"
      onClick={() => handleClickItem()}
    >
      <div className="memo-title">{memo.title}</div>
      <div className={`memo-label ${memo.label}`}></div>
    </div>
  )
}

export default withRouter(MemoListItem)
