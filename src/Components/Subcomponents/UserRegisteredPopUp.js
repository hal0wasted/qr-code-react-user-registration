import React, { Component, Fragment } from 'react'
import '../../scss/modals.scss'

class UserRegisteredPopUp extends Component {
  render(){
    const message = 'User Successfully Registered!'
    return (
      <div style={{}}>
        <div style={{}} className='user-registered-pop-up-container'>
          <div style={{
              width: `50%`,
              margin: `auto`,
              display: `block`,
              top: `4%`, left: 0, right: 0,
              height: `${innerHeight * .5}px`,
              backgroundColor: 'black',
              border: `2px solid white`,
              position: `absolute`
            }} className='user-registered-pop-up-inner animated-modal'>
            <div style={{
                width: `50%`,
                height: `0%`,
                margin: `auto`,
                display: `block`,
                position: `absolute`,
                fontSize: `1em`,
                lineHeight: `1em`,
                top: `-10%`, left: 0,
                right: 0, bottom: 0,
                textAlign: `center`
              }} className='user-registered-pop-up-message'>
              {message}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserRegisteredPopUp
