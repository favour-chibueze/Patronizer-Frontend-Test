import React from 'react'


const options = ["Select an Option", "First Bank", "Union Bank", "GTB"]

class SelectBox extends React.Component {
  constructor(props) {
    super(props);  
    this.state = { 
      label: ""
    };
  }
  onChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    let arrayOfData = this.props.arrayOfData;
    let options = arrayOfData.map((data) =>
            <option 
                key={data.id}
                value={data.id}
            >
                {data.name}
            </option>
        );
    return (
      <div className="form">
          <label htmlFor="Select Bank" >{this.props.label}</label>
          <select value={this.state.value} onChange={this.onChange.bind(this)}>
            {options}
          </select>
      </div>
      
    )
  }
}

export default SelectBox



