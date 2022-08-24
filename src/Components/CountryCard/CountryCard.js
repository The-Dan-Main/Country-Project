import React from "react";
import "./CountryCard.css"

class CountryCard extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }


    displayCurrency(currencies, i) {
        return `${Object.values(currencies)[i].name} (${Object.keys(currencies)[i]})`
    }

    displayLanguages(languages) {
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
                    onClick={() => this.props.delete(this.props.country.ccn3)}
                >
                    <img
                        src="https://img.icons8.com/sf-regular/48/000000/close-window.png"
                        title="delete this country from display"
                        alt="delete this country from display"
                        className="close-button"
                    />
                </div>
                <img src={this.props.country.flags.png} alt="" className="country-flag" />
                <h4 className="country-title">{this.props.title}</h4>
                <p className="country-display-header flex-card-item">Capital:     <span className="country-values">{this.props.country.capital[0]}</span></p>
                <p className="country-display-header flex-card-item">Continent: <span className="country-values">{this.props.country.continents[0]}</span></p>

                {Object.values(this.props.country.currencies).length > 1
                    ? <div className="wrapper">
                        <p className="country-display-header flex-card-item">
                        Currencies:
                            <p className="country-values-currency">
                                {this.displayCurrency(this.props.country.currencies, 0)}
                            </p>
                            <p className="country-values-currency">
                                {this.displayCurrency(this.props.country.currencies, 1)}
                            </p>
                        </p>
                    </div>
                    : <p className="country-display-header flex-card-item">
                        Currency:
                            <span className="country-values-currency">
                                {this.displayCurrency(this.props.country.currencies, 0)}
                            </span>
                        </p>

                }



                <p className="country-display-header flex-card-item">Cars drive on side: <span className="country-carside">{this.props.country.car.side}</span></p>
                <p className="country-display-header flex-card-item">languages: <span className="country-languages">{this.displayLanguages(Object.values(this.props.country.languages))}</span></p>
            </div>
        )
    }






}
export default CountryCard;