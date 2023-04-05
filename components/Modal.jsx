import './Modal.css'

function Modal({ title, modalConfirm, modalCancel }) {
  return <>
          <div className="modal">
            <p className="modal__title">{title}</p>
            <div className="modal__buttons">
              <button className="btn btn__cancel" onClick={modalCancel}>Cancel</button>
              <button className="btn" onClick={modalConfirm}>Confirm</button>
            </div>
          </div>
          <div className="backdrop" />
          </>
}

export default Modal;
