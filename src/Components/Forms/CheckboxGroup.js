import React from 'react';

class CheckboxGroup extends React.Component {
  checkboxGroup = () => {
  const { label, required, options, input, meta } = this.props;
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
                   if (event.target.checked) {
                     newValue.push(option.name.slice(4, option.name.length).toLowerCase())
                   }else{
                    newValue.splice(newValue.indexOf(option.name.slice(4, option.name.length).toLowerCase()), 1)
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
