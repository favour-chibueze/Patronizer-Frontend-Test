import React from "react";
import '../VerifyAccount/verifyAccount.scss'
import BusinessInput from "./BusinessInput/businessInput";

class BusinessCategory extends React.Component {
      render() {
        return(
            <React.Fragment>
                <div className="verify-account">
                    <p className="progress">Step 3/3</p>
                    <h1 className="title">Business Category</h1>
                </div>   
                <BusinessInput />
            </React.Fragment>
        );
      }
    }
    
export default BusinessCategory;