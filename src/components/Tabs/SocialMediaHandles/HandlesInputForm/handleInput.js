import React from "react";
import FormInput from "../../../Forms/formInput";
import Button from "../../../Buttons/buttons";
import '../../../Buttons/button.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt } from "@fortawesome/free-solid-svg-icons";

class HandleInput extends React.Component {
      render() {
        return(
            <React.Fragment>
                <div className="icon-container">
                    <FormInput
                        label="Choose your Abeg Tag (required)"
                        name="account"
                        type="text"
                        className="min-width"
                        // defaultValue={accountNumber}
                        // onChange={this.handleChange}
                        />
                    <div className="icon abeg-tag">
                       <FontAwesomeIcon icon={faAt} />
                    </div>
                </div>
                    <div className="form-container">
                        <div className="icon-container">
                            <FormInput
                                label="Instagram"
                                name="account"
                                type="text"
                                // defaultValue={accountNumber}
                                // onChange={this.handleChange}
                            />
                            <div className="icon">
                                 <FontAwesomeIcon icon={faAt} />
                            </div>
                        </div>
                        <div className="icon-container">
                            <FormInput
                                label="Twitter"
                                name="account"
                                type="text"
                                // defaultValue={accountNumber}
                                // onChange={this.handleChange}
                            />
                            <div className="icon">
                                    <FontAwesomeIcon icon={faAt} />
                            </div>
                        </div>
                    </div>
                    <div className="btn-flex-end">
                        <Button
                            type="primary"
                            label="Confirm Social Handles"
                            handleClick={() => {this.props.handleClick('business_category')} }
                        />
                    </div>
            </React.Fragment>
        );
      }
    }
    
export default HandleInput;