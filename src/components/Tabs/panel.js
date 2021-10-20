import React from "react";
// import './Panel.scss'

class Panel extends React.Component {
      render() {
        return(
            <React.Fragment>
                <div>{this.props.children}</div>
            </React.Fragment>
        );
      }
    }
    
export default Panel;