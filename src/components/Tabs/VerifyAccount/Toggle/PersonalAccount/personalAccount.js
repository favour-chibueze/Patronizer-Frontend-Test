import React from "react";
import FormInput from '../../../../Forms/formInput'
import Button from '../../../../Buttons/buttons'
import '../../../../Buttons/button.scss'
import Accordion from "../../Accordion/accordion";
import SelectBox from "../../../../Forms/Select/selectBox";

const arrayOfData = [
  {
    id: '1 - GTB',
    name: 'GTB'    
  },
  {
    id: '2 - First Bank of Nigeria',
    name: 'First Bank of Nigeria'    
  },
  {
    id: '3 - Access Bank',
    name: 'Access Bank'    
  },
  {
    id: '4 - Kuda Bank',
    name: 'Kuda Bank'    
  },
];
class PersonalAccount extends React.Component {
    state = {
      user: {
        accountNumber: "",
        bankNumber: ""
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
        user: { accountNumber, bankName }
      } = this.state;
      let err = {};
  
      if (!accountNumber) {
        err.accountNumber = "Enter your Account Number!";
      }
  
      if (!bankName) {
        err.bankName = "Select a Bank!";
      }
  
      this.setState({ errors: err }, () => {
        if (Object.getOwnPropertyNames(this.state.errors).length === 0) {
          this.setState({ submitted: true });
        }
      });
    };
  
    render() {
      const {
        submitted,
        errors,
        user: { accountNumber, bankName }
      } = this.state;
      return (
        <React.Fragment>
          {submitted ? (
            ''
          ) : (
            <React.Fragment>
               <div className="form-container">
                  <FormInput
                        label="Account Number"
                        name="account"
                        type="text"
                        defaultValue={accountNumber}
                        onChange={this.handleChange}
                        error={errors.accountNumber}
                        required
                    />
                    <SelectBox 
                    // label="Test"
                      defaultValue={bankName}
                      arrayOfData={arrayOfData}
                      onChange={this.handleChange}
                      error={errors.accountNumber}
                    />
              </div> 
              <div className="btn-flex-end">
                  <Button
                      type="primary"
                      label="Continue"
                      handleClick={() => {this.props.handleClick('social_media')}}
                  />
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      );
    }
  }
  
  export default PersonalAccount;