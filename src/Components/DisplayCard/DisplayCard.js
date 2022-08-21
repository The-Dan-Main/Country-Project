import React from "react";
import "./DisplayCard.css"
import CountryCard from "../CountryCard/CountryCard"

class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.state
        this.deleteCountryfromDisplay = this.deleteCountryfromDisplay.bind(this)
    }


    addTodisplayed(result) {
        if (this.state.displayed.includes(result)) {} 
        else {
            this.state.displayed.push(result)
            let newState = this.state
            console.log("added country", newState)
            this.props.add({
                displayed: newState}
                )
            this.forceUpdate()
        }
        
    }

    deleteCountryfromDisplay (key) {
        console.log(key)
        console.log("delete wurde geklickt")
        console.log(this.state.displayed.filter(country => country.ccn3 !== key))
        const newState = this.state.displayed.filter(country => country.ccn3 !== key)
        console.log("added deleted", newState)
        this.props.delete(newState)
        this.setState({
            displayed: newState}
            )
        this.forceUpdate()
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
                    {this.state.displayed.map(
                        (result) => {
                            if (result.name.common !== "") {
                                return (
                                    <CountryCard
                                        state={this.state}
                                        title={result.name.common}
                                        country={result}
                                        key={result.cnn3}
                                        delete={this.deleteCountryfromDisplay}
                                    />
                                )
                            } else {return null}
                        }              
                        )}

                </div>
            </div>

        )
    }
}

export default DisplayCard;