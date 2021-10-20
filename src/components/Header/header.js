import React from "react";
import './header.scss'
import Button from "../Buttons/buttons";
import '../Buttons/button.scss'

class Header extends React.Component {
      render() {
        return(
            <React.Fragment>
               <header>
                    <Button
                        type="danger"
                        label="Logout"
                        handleClick={this.onSubmit}
                    />
               </header>
            </React.Fragment>
        );
      }
    }
    
export default Header;