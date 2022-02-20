import "./Dialogue.scss";

export default function Dialogue({ show, title, description, cancel, confirm, cancelMessage, confirmMessage }) {

  if (!show) {
    return <></>
  }

  return (
    <>
      <div className="overlay">
        <div className="dialog">
          <div className="dialog__content">
            <h2 className="dialog__title">{title}</h2>
            <p className="dialog__description">
              {description}
            </p>
          </div>
          <hr />
          <div className="dialog__footer">
            <button onClick={cancel} className="dialog__cancel">{cancelMessage}</button>
            <button onClick={confirm} className="dialog__confirm">{confirmMessage}</button>
          </div>
        </div>
      </div>
    </>
  )
}