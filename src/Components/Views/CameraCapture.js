import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import _, { flow } from 'lodash'
// import axiosConfig from './axios.config'
import axios from 'axios'

class CameraCapture extends Component {
  outputToImage = async (data) => {
    const { history, scan, userValues } = this.props
    const protocol = `https`
    const host = {
      work: `192.168.2.70`,
      home: `192.168.1.10`
    }
    const port = 3000
    try {
      const code = await axios.post(`${protocol}://${host.work}:${port}/imageOutput/`, { data: data.data })
      console.log(code)
      scan(code.data)
      // axios call to send data to DB
      const response = await axios.post(`${protocol}://${host.work}:${port}/userDataSubmit/`, {
        data: {
          firstName: userValues.firstName,
          lastName: userValues.lastName,
          email: userValues.email,
          qr: code.data
        }
      })
      if (response.data.message === 'ok'){
        history.push(`/UserData`)
        // showSuccessRegisteredMessage()
        // send `you are now registered!` message once we're back in /UserData
        // have to reload the page until I find a solution for turning off the camera
        window.location.reload()
      }else{
        console.log(`looks like mysql QR insert failed`)
      }
    }catch(err){
      console.log(err)
    }
  }
  processPhoto = dataString => {
    const matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {}
    if (matches.length !== 3) {
      return new Error('Invalid input string')
    }
    response.type = matches[1]
    response.data = new Buffer(matches[2], 'base64')
    console.log(response)
    // return response
    this.outputToImage(response)
  }
  onTakePhoto = dataUri => {
    console.log( dataUri )
    this.processPhoto(dataUri)
  }
  onCameraError = err => {
    console.log(err)
  }
  onCameraStart = stream => {
    this.stream = stream
  }
  onCameraStop = () => {
    console.log('web cam stopped.')
  }
  render(){
    const { qr } = this.props
    console.log( qr )
    return (
      <Camera
        onTakePhoto = { dataUri => { this.onTakePhoto(dataUri) } }
        onCameraError = { err => { this.onCameraError(err) } }
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        idealResolution = {{width: 640, height: 480}}
        imageCompression = {0.8}
        isImageMirror = {false}
        imageType = { IMAGE_TYPES.PNG }
        onCameraStart = { (stream) => { this.onCameraStart(stream); } }
        onCameraStop = { () => { this.onCameraStop(); } }
      />
    )
  }
}

export default flow(
  connect(mapState, mapDispatch),
  withRouter
)(CameraCapture)
