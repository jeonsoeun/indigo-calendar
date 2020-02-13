import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

import '../styles/components/memoListModal.scss'

import MemoListItem from './MemoListItem'

export const MemoListModal: React.FC<{}> = () => {
  const { selectedDate } = useSelector((state: RootState) => state.calendar)
  const { memoList } = useSelector((state: RootState) => state.memo)
  const week = ['일', '월', '화', '수', '목', '금', '토']

  const memoListElement = []
  for (let [key, memo] of memoList) {
    memoListElement.push(
      <MemoListItem
        title={memo.title}
        label={memo.label}
        key={key}
      ></MemoListItem>
    )
  }

  return (
    <div className="MemoListModal modal" id="MemoListModal">
      <div className="modal-shadow"></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">
              <span className="day">{selectedDate.getDate()}일</span>
              <span className="week">({week[selectedDate.getDay()]})</span>
              <span className="month">{selectedDate.getMonth() + 1}월</span>
              <span className="year">{selectedDate.getFullYear()}</span>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="memo-list list-group">{memoListElement}</div>
          </div>
          <div className="modal-footer">
            <button className="btn-add-memo btn btn-primary">
              <span>+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoListModal
