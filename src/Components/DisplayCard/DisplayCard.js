import React from "react";
import "./DisplayCard.css"
import CountryCard from "../CountryCard/CountryCard"
import SearchResult from "../SearchResult/SearchResult";

class DisplayCard extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props)
    }


    addTodisplayed = (result) => {
        if (!this.props.displayed.includes(result)) {
            this.props.displayed.push(result)
            let newState = this.props.displayed
            this.props.add({
                displayed: newState
            })
        }
    }

    deleteCountryfromDisplay = (key) => {
        const newState = this.props.displayed.filter(country => country.ccn3 !== key)
        this.props.delete({
            displayed: newState
        })
    }



    render() {
        return (
            <div className="display-container">
                <div className="search-result-section">
                    {this.props.results.length > 0 && this.props.results.map(
                        (result) => {
                            return (
                                <SearchResult
                                    key={result.ccn3}
                                    src={result.flags.png}
                                    addTodisplayed={() => this.addTodisplayed(result)}
                                    title={result.name.common}
                                    result={result}
                                />
                            )
                        }
                    )
                    }
                </div>
                <div className="country-detail-section">
                    {this.props.results.length > 0 && this.props.displayed.map(
                        (result) => {
                            return (
                                <CountryCard
                                    title={result.name.common}
                                    country={result}
                                    key={result.cnn3}
                                    delete={this.deleteCountryfromDisplay}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default DisplayCard;