import React from 'react'

type MemoListItemProp = {
  title: string
  label: string
}

export const MemoListItem: React.FC<MemoListItemProp> = (props) => {
  const { title, label } = props
  return (
    <div className="MemoListItem list-group-item list-group-item-action">
      <div className="memo-title">{title}</div>
      <div className={`memo-label ${label}`}></div>
    </div>
  )
}

export default MemoListItem
