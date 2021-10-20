import React from "react";
import SelectBox from "../../../Forms/Select/selectBox";
import Button from "../../../Buttons/buttons";
import '../../../Buttons/button.scss'
import './businessInput.scss'

const arrayOfDataOne = [
    {
      id: '1 - Corporate',
      name: 'Corporate'    
    },
    {
      id: '2 - Limited',
      name: 'Limited'    
    },
  
  ];

  const arrayOfDataTwo = [
    {
      id: '1 - NGO',
      name: 'NGO'    
    },
    {
      id: '2 - Limited Partnership',
      name: 'Limited Partnership'    
    },
  ];
class BusinessInput extends React.Component {
      render() {
        return(
            <React.Fragment>
                    <div className="form-container">
                        <SelectBox 
                          label="Type of your business"
                            arrayOfData={arrayOfDataOne}
                        />
                        <SelectBox 
                            label="Business Category"
                            arrayOfData={arrayOfDataTwo}
                        />
                          <div className="radio-button-container">
                              <p className="mt-3">Do you use POS machines for your business?</p>
                                <div class="radio-button">
                                      <label htmlFor="pos_for_business_yes">
                                        <input type="radio" id="pos_for_business_yes" name="pos_for_business" required />
                                        <span>Yes</span>
                                    </label>
                                </div>
                                <div class="radio-button">
                                      <label htmlFor="pos_for_business_no">
                                        <input type="radio" id="pos_for_business_no" name="pos_for_business" required />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>
                      </div>
                 <div className="btn-flex-end">
                        <Button
                            type="primary"
                            label="Complete"
                            handleClick={this.onSubmit}
                        />
                </div>
            </React.Fragment>
        );
      }
    }
    
export default BusinessInput;