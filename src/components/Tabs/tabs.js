import React from "react";
import './tabs.scss'

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: 0,
        }
      }
      render(){
        const tab_items = {
          "verify_account": "Verify Account",
          "social_media": "Social Media Handles",
          "business_category": "Business Category"
        }
        let completeSteps = []
        let indexIcons = (index, key) => 
          <React.Fragment>
            {
              this.props.completeSteps.includes(key) ?
              <div className="checkbox">
                <span className="tick tick-success"></span>
              </div>
              :
              <span className={`index-icon ${this.props.currentTab === key ? '' : 'disabled'}`}>
              {index+1}
              </span>
              
            }
          </React.Fragment>
        const keys = Object.keys(tab_items)
        let tabs = keys.map((key, index)=>
        <li className={this.props.currentTab === key ? 'selected': ''} key={key} >
          {indexIcons(index, key)}
          <span className="mobile">{tab_items[key]}</span>
        </li>

        )
        return (
          <React.Fragment>
            <ul className="inline">
              {tabs}
            </ul>
          </React.Fragment>
        )
      }
    }
    
export default Tabs;