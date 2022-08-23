import DisplayCard from "../DisplayCard/DisplayCard"
import InputField from "../InputField/InputField"
import React from "react"
import './Content.css'
import { defaultData } from "./defaultData"

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // FEEDBACK: I would suggest removing this default data, It does not seem to be
            // doing anything
            allResults: [defaultData[0]],
            displayed: [defaultData[0]],
        }
        // TODO: you can remove the bindings of on the constructor if you change all of your 
        // functions on the class to use the arrow functions
        this.getData = this.getData.bind(this)
        // FEEDBACK: if you are storing data it should always be stored within state
        this.allResults = this.state.allResults
        this.delete = this.delete.bind(this)
        this.add = this.add.bind(this)
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
                    }
                    )
                    this.allResults = this.state.allResults
                })
                .catch((error) => {
                    console.log("Error:", error)
                    
                    // this.setState(
                    //     {
                    //         allResults: [defaultData[0]],
                    //         displayed: [defaultData[0]],
                    //     }
                    // )
                })
        }
        // else {
        //     this.setState(
        //         {
        //             allResults: [defaultData[0]]
        //         }
        //     )
        // }
    }


    delete(newState) {
        this.setState({
            displayed: newState
        })
        this.forceUpdate()
    }
    add(newSate) {
        this.setState({
            displayed: newSate.displayed
        })

        // TODO: remove all instances of forceUpdate as 
        // setState is already updating the components
        this.forceUpdate()
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