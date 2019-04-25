import React, { Component } from 'react'
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import axios from 'axios'

class CameraCapture extends Component {
  outputToImage = data => {
    const protocol = `https`
    const host = `192.168.1.10`
    const port = 3000
    axios.post(`${protocol}://${host}:${port}/imageOutput/`, {
            data: data.data
          })
         .catch(err => console.log(err))
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
  render(){
    return (
      <Camera
        onTakePhoto = { dataUri => { this.onTakePhoto(dataUri) } }
        onCameraError = { err => { this.onCameraError(err) } }
        idealResolution = {{width: 640, height: 480}}
        imageCompression = {0.8}
        imageType = { IMAGE_TYPES.JPG }
      />
    )
  }
}

export default CameraCapture
