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
                   const value = option.name.slice(4, option.name.length).toLowerCase()
                   if (event.target.checked) {
                     if (_.includes(exceptions, letter)) {
                       newValue.splice(0, newValue.length)
                       newValue.push(value)
                       checkException ? checkException() : null
                       options.forEach(op => { if (op.actions) op.actions.uncheck() })
                     } else {
                       if (newValue[0] === 'none of the above'
                          || newValue[0] === 'prefer not to respond'
                          || newValue[0] === 'i do not have a license'){
                         newValue.shift()
                       }
                       newValue.push(value)
                       check ? check() : null
                       if (option.actions) option.actions.check()
                     }
                   }else{
                     newValue.splice(newValue.indexOf(value), 1)
                     uncheck ? uncheck() : null
                     if (option.actions) option.actions.uncheck()
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
