import React from 'react'

//import '../styles/components/memoListModal.scss'

export const MemoListModal: React.FC = () => {
  return (
    <div className="MemoListModal modal" id="MemoListModal">
      <div className="modal-shadow"></div>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-title">1월!!</div>
          </div>
          <div className="modal-body">
            <button className="btn-add-memo"></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemoListModal
