import React from "react";
import "./CountryCard.css"

class CountryCard extends React.Component {
constructor(props) {
    super(props)
    this.state = this.props.state
    this.key = this.props.key
    this.country =  this.props.country
    this.currency = this.props.country.currencies
    this.languages = Object.values(this.props.country.languages)
}


displayCurrency (currencies) {
    const len = Object.keys(currencies).length
    let output = `${Object.values(currencies)[0].name} (${Object.keys(currencies)[0]}) // `
    if (len > 1) {
        for (let i = 1; i < len; i++) {
            output = output + `${Object.values(currencies)[i].name} (${Object.keys(currencies)[i]})`
        }
    }
    return output
}

displayLanguages (languages) {
    let output = languages[0]
    if (languages.length > 1) {
        for (let i = 1; i < languages.length; i++) {
            output = output + ", " + languages[i]
        }
    }
    return output
}



render() {
    return (
        <div className="CountryCard-container">
            <div 
                className="close-button-container"
                onClick={() => this.props.delete(this.country.ccn3)}
                >
                <img 
                src="https://img.icons8.com/sf-regular/48/000000/close-window.png" 
                title="delete this country from display" 
                alt="delete this country from display" 
                className="close-button"
                />
            </div>
            <img src={this.country.flags.png} alt="" className="country-flag" />
            <h4 className="country-title">{this.props.title}</h4>
            <p className="country-display-header flex-card-item">Capital:     <span className="country-values">{this.country.capital[0]}</span></p>
            <p className="country-display-header flex-card-item">Continent: <span className="country-values">{this.country.continents[0]}</span></p>
            <p className="country-display-header flex-card-item">Currencies: </p><span className="country-values-currency">{this.displayCurrency(this.currency)}</span>
            <p className="country-display-header flex-card-item">Cars drive on side: <span className="country-carside">{this.country.car.side}</span></p>
            <p className="country-display-header flex-card-item">languages: <span className="country-languages">{this.displayLanguages(this.languages)}</span></p>
        </div>
    )
}






}
export default CountryCard;