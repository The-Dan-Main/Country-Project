import React from "react";

class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.state
    }


    render () {
        return (
            <div className="display-section-container">
                {/* <h3 className="country-header">{ props.result.name }</h3> */}
    

            </div>
        )
    }
}

export default DisplayCard;