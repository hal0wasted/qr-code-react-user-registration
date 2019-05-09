import React from 'react'
import _ from 'lodash'

class CheckboxGroup extends React.Component {
  checkboxGroup = () => {
  const { label, required, options, input, meta, letter, exceptions, check, uncheck, checkException } = this.props;
  return options.map((option, index) => {
    return (
      <div className="checkbox" key={index}>
        <label>
          <input type="checkbox"
                 name={`${input.name}[${index}]`}
                 value={option.name.slice(4, option.name.length).toLowerCase()}
                 checked={input.value.indexOf(option.name.slice(4, option.name.length).toLowerCase()) !== -1}
                 onChange={(event) => {
                   const newValue = [...input.value]
                   const letter = option.name.slice(0, 1)
                   if (event.target.checked) {
                     if (_.includes(exceptions, letter)) {
                       newValue.splice(0, newValue.length)
                       newValue.push(option.name.slice(4, option.name.length).toLowerCase())
                       checkException ? checkException() : null
                     } else {
                       newValue.push(option.name.slice(4, option.name.length).toLowerCase())
                       check ? check() : null
                     }
                   }else{
                     newValue.splice(newValue.indexOf(option.name.slice(4, option.name.length).toLowerCase()), 1)
                     uncheck ? uncheck() : null
                   }
                   return input.onChange(newValue)
                  }}/>
          <span>{option.name}</span>
        </label>
      </div>)
    })
  }
  render() {
    return (<div>{this.checkboxGroup()}</div>)
  }
}


export default CheckboxGroup;
