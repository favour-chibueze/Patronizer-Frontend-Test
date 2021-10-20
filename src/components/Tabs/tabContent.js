import React from "react";
import Tabs from "./tabs";
import './tabs.scss'
import VerifyAccount from "./VerifyAccount/verifyAccount";
import SocialMediaHandles from "./SocialMediaHandles/socialMediaHandles";
import BusinessCategory from "./BusinessCategories/businessCategory";

class TabContent extends React.Component {
    constructor(props) {
        super(props);     
        this.state = {
          currentTab: "verify_account",
          completeSteps: []
        };
      }
      handleClick = (currentTab) => {
        this.state.completeSteps.push(this.state.currentTab)
        this.setState({currentTab})
      }
      render() {
        return(
            <React.Fragment>
                <Tabs
                  selected={0} 
                  currentTab={this.state.currentTab} 
                  completeSteps={this.state.completeSteps} 
                />
                    {this.state.currentTab === 'verify_account' && (
                        <VerifyAccount handleClick={this.handleClick}/>
                    )}
                   {this.state.currentTab === 'social_media' && (
                        <SocialMediaHandles handleClick={this.handleClick} /> 
                    )}
                    {this.state.currentTab === 'business_category' && (
                        <BusinessCategory />
                    )}
            </React.Fragment>
        );
      }
    }
    
export default TabContent;