import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import $ from 'jquery'
import 'bootstrap'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

import { LABELS } from '../store/memo'
import '../styles/pages/memoEditor.scss'
import { RootState } from '../store'
import { setNewMemo } from '../store/memo'
import { Link, withRouter, RouteComponentProps } from 'react-router-dom'

export const MemoEditor: React.FC<RouteComponentProps> = (props) => {
  const dispatch = useDispatch()
  useEffect(() => {
    $('.modal-backdrop').remove()
  })
  const selectedMemo = useSelector(
    (state: RootState) => state.memo.selectedMemo
  )
  const { selectedDate } = useSelector((state: RootState) => state.calendar)
  const [label, setLabel] = useState('coral')
  const [memoDate, setDate] = useState(new Date(selectedDate))
  const [memoTitle, setTitle] = useState('')
  const [memoDetail, setDetail] = useState('')
  if (selectedMemo) {
    setLabel(selectedMemo.label)
  }

  const selectLabel = (newLabel: string) => {
    setLabel(newLabel)
  }
  const handleSelectedDate = (newDate: Date | null) => {
    if (newDate !== null) {
      setDate(newDate)
    }
  }

  const handleSave = () => {
    const title: string = memoTitle
    dispatch(
      setNewMemo({
        title: title,
        date: memoDate,
        contents: memoDetail,
        label: label,
      })
    )
    props.history.push('/')
  }

  return (
    <div className="MemoEditor">
      <div className="main-info container">
        <div className="memo-title">
          <input
            type="text"
            id="memo-title-input"
            placeholder={'제목'}
            onChange={({ target: { value } }) => setTitle(value)}
          />
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
            selected={memoDate}
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
      <div className="sub-info container">
        <div className="detail">
          <textarea
            className="detail-input form-control"
            aria-label="With textarea"
            placeholder={`내용`}
            onChange={({ target: { value } }) => setDetail(value)}
          ></textarea>
        </div>
      </div>
      <div className="buttons">
        <Link to="/" className="btn cancel">
          {'취소'}
        </Link>
        <button className="btn save" onClick={() => handleSave()}>
          {'저장'}
        </button>
      </div>
    </div>
  )
}

export default withRouter(MemoEditor)
