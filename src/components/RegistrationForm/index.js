// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showLastnameError: false,
    showFirstnameError: false,
  }

  changeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  changeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onBlurFirstname = () => {
    const {firstname} = this.state
    const result = firstname === ''
    if (result) {
      this.setState({showFirstnameError: true})
    }
  }

  onBlurLastname = () => {
    const {lastname} = this.state
    const result = lastname === ''
    if (result) {
      this.setState({showLastnameError: true})
    }
  }

  render() {
    const {showFirstnameError, showLastnameError} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        <div className="registration-card">
          <label htmlFor="firstname" className="first-name">
            FIRST NAME
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First name"
            className="input-element"
            onChange={this.changeFirstname()}
            onBlur={this.onBlurFirstname()}
          />
          {showFirstnameError ? <p> Error </p> : ''}
          <label htmlFor="lastname" className="last-name">
            LAST NAME
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last name"
            className="input-element"
            onChange={this.changeLastname()}
            onBlur={this.onBlurLastname()}
          />
          {showLastnameError ? <p> Error </p> : ''}
          <div className="submit-button-container">
            <button type="button" className="submit-button">
              Submit
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default RegistrationForm
