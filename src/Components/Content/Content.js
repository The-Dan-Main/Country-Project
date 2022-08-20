import DisplayCard from "../DisplayCard/DisplayCard"
import InputField from "../InputField/InputField"
import React, { useState } from "react"
import './Content.css'
import { defaultData } from "./defaultData"

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allResults: [defaultData[0]],
            displayed: [defaultData[0]],
        }
        this.getData = this.getData.bind(this)
        this.allResults = this.state.allResults
    }


    getData(searchName) {
        if (searchName.length > 0) {
            fetch(`https://restcountries.com/v3.1/name/${searchName}?access_key=b42b74623d0e404353804bd0dcd3832a`)
                .then((response) => {
                    if (response.ok) {
                        document.querySelector(".not-succesful-search").classList.remove("error")
                        return response.json();
                    } else {
                        document.querySelector(".not-succesful-search").classList.add("error")
                        throw new Error('search not succeful, try again');
                    }

                })
                .then((data) => {
                    this.setState({
                        allResults: data,
                    }
                    )
                    this.allResults = this.state.allResults
                    this.allResults.displayInfoAboutCountry = this.displayInfoAboutCountry
                })
                .catch((error) => {
                    console.log("Error:", error)
                    this.setState(
                        {
                            allResults: [defaultData[0]],
                            displayed: [defaultData[0]],
                        }

                    )
                })
        }
        else {
            this.setState(
                {
                    allResults: [defaultData[0]],
                    displayed: [defaultData[0]],
                }

            )
        }
    }


    render() {
        return (
            <div className="content-section">
                <h1>Country Project</h1>
                <InputField
                    getData={this.getData}
                    props={this.state}
                />
                <h5 className="not-succesful-search">This country does not exists</h5>
                <div className="result-section">
                    <div className="search-results">
                        <DisplayCard
                            results={this.state.allResults}

                            state={this.state}

                        />


                        {/* {Array.from(this.allResults).map(
                            function (result) {
                               
                                return <DisplayCard
                                    title={result.name.common}
                                    key={result.ccn3}
                                    flag={result.flags.png}
                                    country={ result }
                                />
                            })} */}
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;