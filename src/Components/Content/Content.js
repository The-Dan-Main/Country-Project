import DisplayCard from "../DisplayCard/DisplayCard"
import InputField from "../InputField/InputField"
import React, { useState } from "react"
import './Content.css'


class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allResults: { start: 0, },
            currentSearchResult: {},
            test: 0,
            displayed: {},
        }
        this.getData = this.getData.bind(this)
        this.allResults = this.state.allResults
    }


    getData(searchName) {
        fetch(`https://restcountries.com/v3.1/name/${searchName}?access_key=b42b74623d0e404353804bd0dcd3832a`)
            .then((response) => response.json())
            .then((data) => {
                let first = data[0]
                this.setState({
                    allResults: data,
                    currentSearchResult: first,
                    test: this.state.test += 1
                }
                )
                this.allResults = this.state.allResults
                this.allResults.displayInfoAboutCountry = this.displayInfoAboutCountry
            })
    }


    render() {
        return (
            <div className="content-section">
                <h1>Country Project</h1>
                <InputField
                    getData={this.getData}
                    props={this.state}
                />
                <div className="result-section">
                    <div className="search-results">

                        {Array.from(this.allResults).map(
                            function (result) {
                               
                                return <DisplayCard
                                    title={result.name.common}
                                    key={result.ccn3}
                                    flag={result.flags.png}
                                    country={ result }
                                />
                            })}
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;