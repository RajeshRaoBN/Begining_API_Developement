import React, { Component } from 'react'

export default class Greetings extends Component {
    
    state = {
        name: "World"
    }

    updateName() {
        this.setState({ name: "Rajesh"})
    }

  render() {
    return (
      <div>
        {this.state.name}
      </div>
    )
  }
}
