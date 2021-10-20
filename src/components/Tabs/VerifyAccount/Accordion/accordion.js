import React from "react";
import './accordion.scss'
import AccordionList from "./accordionList";
import keyLock from "../../../../assets/images/Union.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp , faLock} from "@fortawesome/free-solid-svg-icons";

class Accordion extends React.Component {
    constructor(props){
     super(props);
     this.state = { open: false, class: "accordion"};
     this.handleClick = this.handleClick.bind(this);
   }
   
   handleClick() {
       this.setState({ open: !this.state.open })  
   }
    render () {
      const { open } = this.state;
    
     return(
       <div className={open ? 'accordion-open' : 'accordion'}>
            <div className="accordion-header">
                <h1 className="accordion-heading">
                    <div className="accordion-body" onClick={this.handleClick} >
                        <span>
                           <FontAwesomeIcon icon={faLock} />
                          {/* <img src={keyLock} alt="key lock" width="20" /> */}
                        </span>
                        Why we need your BVN ?
                        <div className="arrow">
                          <span>{!this.state.open !== open ? 'show' : 'hide' }</span>
                            <FontAwesomeIcon icon={faChevronUp} className="chevron-up"/>
                        </div>
                    </div>
                </h1>
            </div>
            <div className="accordion-content">
                <ul className="list">
                        <AccordionList />
                </ul>
            </div>
       </div>
     );
   }
 }
    
export default Accordion;