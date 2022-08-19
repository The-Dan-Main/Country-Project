import React from "react";
import "./DisplayCard.css"
import CountryCard from "../CountryCard/CountryCard"

class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        this.setState({

        })
    }


    
    render () {
        return (
            <div className="display-section-container">
                <img 
                    src={ this.props.flag } 
                    alt="" 
                    className="display-flag"
                    onClick={ 
                        this.props.display                    
                    }
                />
                <h4 className="country-header">{ this.props.title }</h4>
            </div>
        )
    }
}

export default DisplayCard;