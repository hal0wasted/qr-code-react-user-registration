import React, { Component, PureComponent } from 'react'
import { connect } from 'react-redux'
import { mapState, mapDispatch } from '../../Actions/ActionCreators'
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import config, { protocol, port } from '../../../config'
import axios from 'axios'

class CameraCapture extends Component {
  shouldComponentUpdate(nextProps){
    return nextProps.cameraVisibility !== this.props.cameraVisibility
  }
  outputToImage = async (data) => {
    const userRegisteredPopUpLeaveDelay = 3000
    const { scan, userValues, hideCamera, showUserRegisteredPopUp, hideUserRegisteredPopUp, showConsentForm } = this.props
    const host = config.host.getCurrent()
    try {
      // endpoint: '/decodeQR' outputs an image and passes image data to be decoded to decodeQR() function
      const code = await axios.post(`${protocol}://${host}:${port}/decodeQR/`, { data: data.data })
      if(code.data !== 'timeout.'){ // we recieve either a QR decoded string, or a 'timeout.' from server
        scan(code.data)
        const response = await axios.post(`${protocol}://${host}:${port}/userDataSubmit/`, {
          data: {
            firstName: userValues.firstName,
            lastName: userValues.lastName,
            email: userValues.email,
            qr: code.data
          }
        })
        if (response.data.message === 'ok'){
          hideCamera()
          showUserRegisteredPopUp()
          setTimeout(() => {
            hideUserRegisteredPopUp()
            showConsentForm()
          }, userRegisteredPopUpLeaveDelay)
        }
        else console.log(`looks like mysql QR insert failed`)
      }else{
        console.log('QR read failed, try another picture')
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
    this.outputToImage(response)
  }
  onTakePhoto = dataUri => {
    console.log( dataUri )
    this.processPhoto(dataUri)
  }
  onCameraError = err => {
    console.log(err)
  }
  render(){
    const { qr, cameraVisibility } = this.props
    console.log( qr )
    return (
      <div style={{
          transform: cameraVisibility === 'hidden' ? `translateX(${innerWidth*2}px)` : `translateX(0px)`,
          display: 'block',
          position: 'absolute',
          margin: 'auto',
          top: 0, left: 0, right: 0
        }}>
        <Camera
          onTakePhoto = { dataUri => { this.onTakePhoto(dataUri) } }
          onCameraError = { err => { this.onCameraError(err) } }
          idealFacingMode = {FACING_MODES.ENVIRONMENT}
          idealResolution = {{width: 640, height: 480}}
          imageCompression = {0.8}
          isImageMirror = {false}
          imageType = { IMAGE_TYPES.PNG }
        />
      </div>
    )
  }
}

export default connect(mapState, mapDispatch)(CameraCapture)
