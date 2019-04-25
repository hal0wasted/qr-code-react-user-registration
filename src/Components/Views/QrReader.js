import React, { Component } from 'react'
import Title from '../Subcomponents/Title'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
import QR from 'react-qr-reader'
import '../../scss/show-input.scss'

class QrReader extends Component {
  handleScan = (data) => {
    const { scan } = this.props
    if(data){
      scan(data)
    }
  }
  handleError = (err) => {
    console.log(err)
  }
  render(){
    const title = 'QR Reader'
    const { scanData } = this.props
    return (
      <div className='show-input'>
        <Title title={title}/>
        <QR
          delay={500}
          legacyMode={true}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{
            width: '50%',
            margin: 'auto',
            display: 'block',
            left: 0, right: 0
          }} />
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(QrReader)
