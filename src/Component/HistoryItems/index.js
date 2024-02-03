import './index.css'

const HistoryItems = props => {
  const {historyDetails, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="row">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} className="logo-img" alt="domain logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        className="button"
        type="button"
        onClick={onClickDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          className="delete"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
