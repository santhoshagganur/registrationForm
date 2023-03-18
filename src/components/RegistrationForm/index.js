// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    showLastnameError: true,
    showFirstnameError: true,
    errorMsg: '',
  }

  changeFirstname = event => {
    this.setState({firstname: event.target.value})
  }

  changeLastname = event => {
    this.setState({lastname: event.target.value})
  }

  onFailure = () => {
    this.setState({errorMsg: 'Required'})
  }

  submitUserDetails = event => {
    event.preventDefault()
    const {firstname, lastname} = this.state
    console.log(firstname)
    console.log(lastname)
  }

  render() {
    const {showFirstnameError, showLastnameError, errorMsg} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Registration</h1>
        <form className="registration-card" onSubmit={this.submitUserDetails}>
          <label htmlFor="firstname" className="first-name">
            FIRST NAME
          </label>
          <input
            id="firstname"
            type="text"
            placeholder="First name"
            className="input-element"
            onChange={this.changeFirstname}
          />
          {showFirstnameError && <p> {errorMsg} </p>}
          <label htmlFor="lastname" className="last-name">
            LAST NAME
          </label>
          <input
            id="lastname"
            type="text"
            placeholder="Last name"
            className="input-element"
            onChange={this.changeLastname}
          />
          {showLastnameError && <p> {errorMsg} </p>}
          <div className="submit-button-container">
            <button type="button" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
