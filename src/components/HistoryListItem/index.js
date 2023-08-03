import './index.css'

const HistoryListItem = props => {
  const {item, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = item

  const onDeleteClick = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div>
        <p className="time">{timeAccessed}</p>
        <div className="history-item-container">
          <img className="history-logo" src={logoUrl} alt="domain logo" />
          <p className="title">{title}</p>
          <p className="website para">{domainUrl}</p>
        </div>
      </div>
      <button
        type="button"
        data-testid="delete"
        className="delete-btn"
        onClick={onDeleteClick}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryListItem
