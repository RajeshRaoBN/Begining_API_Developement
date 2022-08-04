import React, { Component } from 'react'

export default class ParentComponent extends Component {
  render() {
    return (
      <div>
        <ChildComponent name="First Child" />
      </div>
    )
  }
}

const ChildComponent = (props) => {
    return <p>{props.name}</p>
}
