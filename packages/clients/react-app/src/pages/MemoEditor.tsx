import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery'
import 'bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { LABELS } from '../store/memo'
import '../styles/pages/memoEditor.scss'
import { RootState } from '../store'
import { setSelectedDate } from '../store/calendar'

export const MemoEditor: React.FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    $('.modal-backdrop').remove()
  })
  const selectedMemo = useSelector(
    (state: RootState) => state.memo.selectedMemo
  )
  const { selectedDate } = useSelector((state: RootState) => state.calendar)
  const [label, setLabel] = useState('coral')
  if (selectedMemo) {
    setLabel(selectedMemo.label)
  }

  const selectLabel = (newLabel: string) => {
    setLabel(newLabel)
  }
  const handleSelectedDate = (newDate: Date | null) => {
    if (newDate !== null) {
      dispatch(setSelectedDate(newDate))
    }
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
            {LABELS.map((lb, index) => {
              return (
                <div
                  className={`dropdown-items ${lb}`}
                  key={index}
                  onClick={() => selectLabel(lb)}
                >
                  <span>{lb === label ? 'V' : ''}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div className="memo-date">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => {
              handleSelectedDate(date)
            }}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={30}
            timeCaption="time"
            dateFormat="yyyy/MM/dd h:mm aa"
          ></DatePicker>
        </div>
      </div>
      <div className="sub-info container"></div>
    </div>
  )
}
