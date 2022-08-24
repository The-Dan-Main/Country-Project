import React from "react";
import "./SearchResult.css";

class SearchResult extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="display-section-container">
                <img
                    src={this.props.src}
                    alt=""
                    className="display-flag"
                    onClick={() => this.props.addTodisplayed(this.props.result)}
                />
                <h4 className="country-header">{this.props.title}</h4>
            </div>
        )
    }

}

export default SearchResult;