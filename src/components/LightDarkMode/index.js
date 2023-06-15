import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: true}

  cilckButton = () => {
    this.setState(prevState => ({mode: !prevState.mode}))
  }

  modeStatus = () => {
    const {mode} = this.state
    console.log(mode)
    if (mode === true) {
      return (
        <div className="bg-container container1">
          <h1 className="heading heading1">Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.cilckButton}>
            Light Mode
          </button>
        </div>
      )
    }
    return (
      <div className="bg-container container2">
        <h1 className="heading heading2">Click To Change Mode</h1>
        <button type="button" className="button" onClick={this.cilckButton}>
          Dark Mode
        </button>
      </div>
    )
  }

  render() {
    return <div className="main-container">{this.modeStatus()}</div>
  }
}
export default LightDarkMode
