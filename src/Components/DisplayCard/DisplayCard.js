import React from "react";
import "./DisplayCard.css"

class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
        // props.displayState(props)
    }


    
    render () {
        return (
            <div className="display-section-container">

                <img src={ this.props.flag } alt="" className="display-flag"/>
                <h4 className="country-header">{ this.props.title }</h4>

            </div>
        )
    }
}

export default DisplayCard;