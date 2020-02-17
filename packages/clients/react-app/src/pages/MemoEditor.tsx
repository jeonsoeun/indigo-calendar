import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import $ from 'jquery'
import 'bootstrap'

import { LABELS } from '../store/memo'
import '../styles/pages/memoEditor.scss'
import { RootState } from '../store'

export const MemoEditor: React.FC = () => {
  useEffect(() => {
    $('.modal-backdrop').remove()
  })
  const selectedMemo = useSelector(
    (state: RootState) => state.memo.selectedMemo
  )
  const [label, setLabel] = useState('coral')
  if (selectedMemo) {
    setLabel(selectedMemo.label)
  }
  return (
    <div className="MemoEditor">
      <div className="main-info container">
        <div className="memo-title">
          <input type="text" id="memo-title-input" placeholder={'제목'} />
        </div>
        <div className="memo-label dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="pickMemoLabel"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div className={`selected-label ${label}`}>
              <div className="arrow"></div>
            </div>
          </button>
          <div className="labels dropdown-menu" aria-labelledby="pickMemoLabel">
            {LABELS.map((label, index) => {
              return (
                <div className="dropdown-items" key={index}>
                  <div className={`label-color ${label}`}></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="sub-info container"></div>
    </div>
  )
}
