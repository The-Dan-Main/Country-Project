import DisplayCard from "../DisplayCard/DisplayCard"
import InputField from "../InputField/InputField"
import React from "react"



class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allResults: {},
            currentSearchResult: {},
            test: 0
        }
        this.getData = this.getData.bind(this)
    }
    startState = () => {
        console.log("state",  this.state)
    }


    getData(searchName) {
        fetch(`https://restcountries.com/v3.1/name/${searchName}?access_key=b42b74623d0e404353804bd0dcd3832a`)
        .then((response) => response.json())
        .then((data) => {
            let first = data[0]
            // console.log("state ",  this.state)
            // console.log("first: ",first)
            this.setState({
                    allResults: data,
                    currentSearchResult: first,
                    test: this.state.test++
                }
                ) 
            // console.log("state",  this.state)
        })
    }
    
    render() {
        return (
            <div className="content-section">
                <h1>Country Project</h1>
                <InputField 
                    getData={this.getData}
                />
                <DisplayCard 
                    searchResult={this.state.currentSearchResult}
                    state={this.state}
                />
            </div>
    
        )

    }

}

export default Content;