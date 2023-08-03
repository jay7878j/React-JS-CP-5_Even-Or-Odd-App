import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {number: 0}

  onIncrement = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    // console.log(randomNumber)

    this.setState(prevState => ({
      number: prevState.number + randomNumber,
    }))
  }

  render() {
    const {number} = this.state
    const countText = number % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main">
        <div className="card">
          <h1 className="count-heading">Count {number}</h1>
          <p className="count-check">Count is {countText}</p>
          <button type="button" className="btn" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
