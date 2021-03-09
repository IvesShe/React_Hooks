import React, { Component,Fragment } from 'react'
import Hooks from './components/Hooks'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Hooks x={101} />
      </Fragment>
    );
  }
}