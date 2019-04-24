import React, { Component } from 'react'
import '../../scss/view.scss'

class Title extends Component {
  render(){
    const { title } = this.props
    return (
      <div className='view-title'>{title}</div>
    )
  }
}

export default Title
