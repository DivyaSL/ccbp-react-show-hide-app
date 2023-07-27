// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstnameDisplayed: false, lastnameDisplayed: false}

  showFirstnameCard = () => {
    this.setState(prevState =>
      prevState.firstnameDisplayed
        ? {firstnameDisplayed: false}
        : {firstnameDisplayed: true},
    )
  }

  showLastnameCard = () => {
    this.setState(prevState =>
      prevState.lastnameDisplayed
        ? {lastnameDisplayed: false}
        : {lastnameDisplayed: true},
    )
  }

  render() {
    const {firstnameDisplayed, lastnameDisplayed} = this.state
    let firstnameCard
    let lastnameCard
    if (firstnameDisplayed) {
      firstnameCard = null
    } else {
      firstnameCard = <p className="name-card">Joe</p>
    }
    if (lastnameDisplayed) {
      lastnameCard = null
    } else {
      lastnameCard = <p className="name-card">Jonas</p>
    }
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="firstname-lastname-container">
          <div className="btn-name-container">
            <button onClick={this.showFirstnameCard} type="button">
              Show/Hide Firstname
            </button>
            <div>{firstnameCard}</div>
          </div>
          <div className="btn-name-container">
            <button onClick={this.showLastnameCard} type="button">
              Show/Hide Lastname
            </button>
            <div>{lastnameCard}</div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
