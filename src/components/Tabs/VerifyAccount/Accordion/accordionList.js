import React from "react";
import './accordion.scss'
import stroke from '../../../../assets/images/Stroke.png'

class AccordionList extends React.Component { 
    render() {    
      return (
            <React.Fragment>
                <li className="list-item">
                     <p className="data">We only need access to your:</p>
                        <p className="data data-second">
                            <span>
                                <img src={stroke} alt="Check mark" />
                            </span>
                            Full Name
                        </p>
                        <p className="data">
                             <span>
                                <img src={stroke} alt="Check mark" />
                            </span>Phone Number
                        </p>
                        <p className="data">
                             <span>
                                <img src={stroke} alt="Check mark" />
                            </span>
                            Date of Birth
                        </p>
                </li>
                <li className="list-item">
                    <div>
                        <span> 🔐</span>
                        Your BVN does not give us access to your bank accounts or transactions
                    </div>
                </li>
            </React.Fragment>
      )
    }
  }
    
export default AccordionList;