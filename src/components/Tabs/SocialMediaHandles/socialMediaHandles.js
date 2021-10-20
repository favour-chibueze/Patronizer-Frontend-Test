import React from "react";
import '../VerifyAccount/verifyAccount.scss'
import HandleInput from "./HandlesInputForm/handleInput";

class SocialMediaHandles extends React.Component {   
      render() {
        return(
            <React.Fragment>
                <div className="verify-account">
                    <p className="progress">Step 2/3</p>
                    <h1 className="title">Social Handles</h1>
                    <div className="form-paragraph">
                    <p>Enter your business social media handles</p> 
                    </div>
                </div>   
                <HandleInput handleClick={this.props.handleClick} />
            </React.Fragment>
        );
      }
    }
    
export default SocialMediaHandles;