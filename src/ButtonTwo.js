import React from 'react'

class ButtonTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      buttonStatus: true
    }
  }

  handleClick = () => {
    if (this.state.buttonStatus === true) {
      this.setState({ buttonStatus: false })
    } else {
      this.setState({ buttonStatus: true })
    }
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.buttonStatus ? "Kia ora!" : "Nau mai, haere mai"}
      </button>
    )
  }

}
export default ButtonTwo;