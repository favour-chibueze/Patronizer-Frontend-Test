import React from "react";
import './background.scss'
import bgImg from '../../assets/images/bg.png';

class BackgroundImage extends React.Component {
      render() {
        return(
            <React.Fragment>
               <div className="bg-image-container">
                   <img src={bgImg} className="bg-image" alt="background image" />
               </div>
            </React.Fragment>
        );
      }
    }
    
export default BackgroundImage;