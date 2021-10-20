import React from "react";
import Accordion from "../../Accordion/accordion";
import '../../../../Buttons/button.scss'
import Button from '../../../../Buttons/buttons'
import FormInput from "../../../../Forms/formInput";

class BankVerification extends React.Component {
    state = {
        user: {
          bankVerification: "",
        },
        errors: {},
        submitted: false
      };
    
      handleChange = event => {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
      };
    
      onSubmit = () => {
        const {
          user: { bankVerification }
        } = this.state;
        let err = {};
    
        if (!bankVerification) {
          err.bankVerification = "Enter your Bank Verification Number!";
        }
    
        this.setState({ errors: err }, () => {
          if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
            this.setState({ submitted: true });
          }
        });
      };
      render() {
        const {
            errors,
            user: { bankVerification }
          } = this.state;
        return(
            <React.Fragment>
                <FormInput
                    label="Bank Verification Number (11-digits)"
                    name="account"
                    type="text"
                    defaultValue={bankVerification}
                    onChange={this.handleChange}
                    error={errors.bankVerification}
                    required
                />

                <Accordion />
                <div className="btn-flex-end">
                  <Button
                      type="primary"
                      label="Continue"
                      handleClick={() => {this.props.handleClick('social_media')}}
                  />
              </div>
            </React.Fragment>
        );
      }
    }
    
export default BankVerification;