import React, { Component } from 'react'
import '../../scss/view.scss'

class Title extends Component {
  render(){
    const { title } = this.props
    return (
      <h1 className='view-title'>{title}</h1>
    )
  }
}

export default Title
