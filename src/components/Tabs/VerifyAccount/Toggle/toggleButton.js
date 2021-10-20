import React from "react";
import './toggleButtons.scss'
import Button from "../../../Buttons/buttons";
import '../../../Buttons/button.scss'
import PersonalAccount from "./PersonalAccount/personalAccount";
import BankVerification from "./BVN/bankVerification";

class ToggleButton extends React.Component {
    constructor(props) {
      super(props);     
      this.state = {
        current: 1
      };
    }
    
    toggle(index) {
      this.setState({
        current: index
      })
    }
    
    render() {
      return (
        <div className="toggle-section">
            <ul>
                <li>
                        <Button
                            type={`secondary ${this.state.current === 1 ? 'active ': ''}`}
                            label="BVN"
                            handleClick={this.toggle.bind(this, 1)}
                        />
                        <Button
                            type={`secondary ${this.state.current === 2 ? 'active ': ''}`}
                            label="Personal Account Number"
                            handleClick={this.toggle.bind(this, 2)}
                        />
                </li>  
                <li>
                    <div className={`collapsible ${this.state.current === 1 ? 'open ': ''}`}>
                        <BankVerification handleClick={this.props.handleClick} />
                    </div>
                    <div className={`collapsible ${this.state.current === 2 ? 'open ': ''}`}>
                        <PersonalAccount handleClick={this.props.handleClick} />
                    </div>
                </li>   
            </ul>
        </div>
      );
    }
  }
export default ToggleButton;