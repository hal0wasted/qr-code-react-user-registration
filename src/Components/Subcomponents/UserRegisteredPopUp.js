import React, { Component, Fragment } from 'react'

class UserRegisteredPopUp extends Component {
  render(){
    const message = 'User Successfully Registered!'
    return (
      <div style={{
        width: '100%',
        margin: 'auto',
        display: 'block',
        left: 0, right:0,
        top: 0, bottom: 0,
        position: 'absolute',
        height: (innerHeight * .5)+'px'
        }}>
        <div style={{
            display: 'table',
            backgroundColor: 'black',
            border: '2px solid #ccc'
          }} className='user-registered-pop-up-container'>
          <div style={{ display: 'table-cell' }} className='user-registered-pop-up-inner'>
            <div style={{
                color: 'white',
                display: 'inline-block',
                marginTop: (innerHeight * .25)+'px',
                textAlign: 'center',
                fontWeight: 'bold'
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
