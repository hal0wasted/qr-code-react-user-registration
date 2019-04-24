import React, { Component } from 'react'
import Title from '../Subcomponents/Title'

class Demographics extends Component {
  render(){
    const title = 'Demographic Survey'
    return (
      <div>
        <Title title={title}/>
      </div>
    )
  }
}

export default Demographics
