import React from "react";
import "./DisplayCard.css"
import CountryCard from "../CountryCard/CountryCard"

class DisplayCard extends React.Component {
    constructor(props) {
        super(props);
        // Remove this here and just use the props coming down
        this.state = this.props.state
        this.deleteCountryfromDisplay = this.deleteCountryfromDisplay.bind(this)
    }


    addTodisplayed(result) {
        if (this.state.displayed.includes(result)) {} 
        else {
            // FEEDBACK: never push anything directly to state this can cause 
            // side effects on updates to the state
            this.state.displayed.push(result)
            let newState = this.state

            console.log("added country", newState)
            this.props.add({
                displayed: newState
            })
            this.forceUpdate()
        }
    }

    deleteCountryfromDisplay (key) {
        console.log(key)
        console.log("delete wurde geklickt")
    
        console.log(this.state.displayed.filter(country => country.name.official !== key))
        const newState = this.state.displayed.filter(country => country.name.official !== key)
        console.log("added deleted", newState)
        this.props.delete(newState)
        // FEEDBACK: you are managing the state for the displayed in two places on the DisplayCard 
        // and in the content. This is probably the cause for the bug as they are out of sync
        // manage the state of the displayed in the content and then pass down as props that data to the 
        // displayCard
        this.setState({
            displayed: newState}
            )
        this.forceUpdate()
    }



    render() {
        return (
            <div className="display-container">
                <div className="search-result-section">
                    {this.props.results.length && this.props.results.map(
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