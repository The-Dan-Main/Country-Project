import DisplayCard from "../DisplayCard/DisplayCard"
import InputField from "../InputField/InputField"
import React from "react"
import './Content.css'

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allResults: [],
            displayed: [],
        }
    }


    getData = (searchName) => {
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
                    })

                })
                .catch((error) => {
                    console.log("Error:", error)
                    this.setState({
                        allResults: [],
                    })
                })
        }
    }


    delete = (newState) => {
        this.setState({
            displayed: newState.displayed
        })

    }
    add = (newState) => {
        this.setState({
            displayed: newState.displayed
        })

    }

    render() {
        return (
            <div className="content-section">
                <h1>Find Country Information</h1>
                <InputField
                    getData={this.getData}
                    props={this.state}
                />
                <h5 className="not-succesful-search">This country does not exists</h5>
                <div className="result-section">
                    <div className="search-results">
                        <DisplayCard
                            results={this.state.allResults}
                            displayed={this.state.displayed}
                            state={this.state}
                            delete={this.delete}
                            add={this.add}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
export default Content;