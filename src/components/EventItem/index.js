// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, onRegistrationStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails

  const onClickEvent = () => {
    onRegistrationStatus(registrationStatus)
  }

  return (
    <li className="event-item">
      <button className="button" type="button" onClick={onClickEvent}>
        <img className="event-image" src={imageUrl} alt="event" />
        <p className="event-name">{name}</p>
        <p className="event-location">{location}</p>
      </button>
    </li>
  )
}

export default EventItem
