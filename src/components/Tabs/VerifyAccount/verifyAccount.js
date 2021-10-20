import React from "react";
import '../VerifyAccount/verifyAccount.scss'
import ToggleButton from "./Toggle/toggleButton";

class VerifyAccount extends React.Component {
      render() {
        return(
            <React.Fragment>
                <div className="verify-account">
                    <p className="progress">Step 1/3</p>
                    <h1 className="title">Verify Account</h1>
                    <div className="form-select-header">
                       <p>Select a verification method</p> 
                    </div>
                </div>
                <ToggleButton handleClick={this.props.handleClick}/>
            </React.Fragment>
        );
      }
    }
    
export default VerifyAccount;