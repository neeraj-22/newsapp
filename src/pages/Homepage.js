import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'

export class Homepage extends Component {
  render() {
    return (
        <>
      <Navbar/>
      <News pageSize={20} country="in" category="general"/>
      </>
    )
  }
}

export default Homepage