import React, { Component,Fragment } from 'react'
import Hooks from './components/Hooks'
import Advance from './components/Advance'
import ReducerDemo from './components/Advance/ReducerDemo'

import ShowArea from './components/Advance/ShowArea'

import Memo from './components/Advance/Memo'

import Ref from './components/Advance/Ref'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Hooks x={101} />
        <hr/>
        <Advance />
        <hr />
        <ReducerDemo />
        <hr />
        <ShowArea />
        <hr />
        <Memo />
        <hr />
        <Ref />
      </Fragment>
    );
  }
}