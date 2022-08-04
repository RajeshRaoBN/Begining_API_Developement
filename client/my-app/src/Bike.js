import React, { Component } from 'react'

export default class Bike extends Component {

    constructor(props) {
        super(props)

        this.state = {
            make: "Yamaha",
            model: "MT 03",
            color: "Purple"
        }
    }

    changeBikeColor = () => {
        this.setState({color: "Green"})
    }

  render() {
    return (
      <div>
        <h2>My {this.state.make}</h2>
        <p>
            It is a {this.state.color} 
            {this.state.model}
        </p>
        <button
        type='button'
        onClick={this.changeBikeColor}
        >Change Color</button>
      </div>
    )
  }
}
