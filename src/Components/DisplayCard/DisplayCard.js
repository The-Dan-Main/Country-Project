import React from "react";
import "./DisplayCard.css"
import CountryCard from "../CountryCard/CountryCard"

class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            displayed: this.props.state.displayed
        }
    }


    addTodisplayed(result) {
        console.log(this.props.state.displayed)
        console.log("duplicate:",this.props.state.displayed.includes(result))
        console.log("index of duplicate:",this.props.state.displayed.indexOf(result))
        if (this.props.state.displayed.includes(result)) {
        } else{
            this.state.displayed.push(result)
            this.setState(this.state)
        }
    }
    render() {
        return (
            <div className="display-container">
                <div className="search-result-section">
                    {this.props.results.map(
                        (result) => {
                            return (
                                <div
                                    className="display-section-container"
                                    key={result.ccn3}
                                >
                                    <img
                                        src={result.flags.png}
                                        alt=""
                                        className="display-flag"
                                        onClick={() => this.addTodisplayed(result)}
                                    />
                                    <h4
                                        className="country-header"
                                    >{result.name.common}</h4>
                                </div>
                            )
                        })}
                </div>
                <div className="country-detail-section">
                {this.props.state.displayed.map(
                        (result) => {
                            if (result.name.common !== "") {
                                return (
                                    <div className="display-section-container">
                                        <h5 className="result-title">{result.name.common}</h5>
                                    </div>
                                )
                            }
                        })}

                </div>
            </div>

        )
    }
}

export default DisplayCard;