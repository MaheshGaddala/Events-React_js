// Write your code here
import {Component} from 'react'
import './index.css'

const eventsStatusConstants = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationCompleted: 'REGISTRATIONS_CLOSED',
}

class ActiveEventRegistrationDetails extends Component {
  registrationCompleted = () => (
    <div className="registration-details-container">
      <img
        className="registration-details-image"
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png "
        alt="registrations closed"
      />
      <h1 className="registrations-details-heading">
        Registrations are Closed Now!
      </h1>
      <p className="registration-details-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  registered = () => (
    <div className="registration-details-container">
      <img
        className="registration-details-image"
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
      />
      <h1 className="registrations-details-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  yetToRegister = () => (
    <div className="registration-details-container">
      <img
        className="registration-details-image"
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
      />
      <p className="registration-details-description">
        A live performance brings so much to your relationship with dance
      </p>
      <button className="registration-details-button" type="button">
        Register Here
      </button>
    </div>
  )

  registrationDetailsPage = () => (
    <div className="registration-details-container">
      <p>Click on an event, to view its registration details</p>
    </div>
  )

  render() {
    const {status} = this.props
    switch (status) {
      case eventsStatusConstants.yetToRegister:
        return this.yetToRegister()
      case eventsStatusConstants.registered:
        return this.registered()
      case eventsStatusConstants.registrationCompleted:
        return this.registrationCompleted()
      default:
        return this.registrationDetailsPage()
    }
  }
}

export default ActiveEventRegistrationDetails
