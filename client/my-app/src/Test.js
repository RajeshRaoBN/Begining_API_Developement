import React, { Component } from 'react'

export default class Test extends Component {

    constructor() {
        super()
        this.state = {
            id: 1,
            name: "test"
        }
    }

  render() {
    return (
      <div>
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
      </div>
    )
  }
}
