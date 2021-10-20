import React from "react";
import Header from "../Header/header";
import TabContent from "../Tabs/tabContent";
import './body.scss'
import SocialMediaHandles from "../Tabs/SocialMediaHandles/socialMediaHandles";

class Body extends React.Component {
      render() {
        return(
            <React.Fragment>
                <div className="body-container">
                    <Header />
                    <TabContent />
                </div>
            </React.Fragment>
        );
      }
    }
    
export default Body;