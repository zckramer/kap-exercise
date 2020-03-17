import React, { Component } from 'react';
import axios from 'axios';
import CardLabels from '../CardLabels/CardLabels'
import CardData from '../CardData/CardData'

const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/"

class Card extends Component {
    state = {
        company: [],
        symbol: this.props.userInput
    }

    componentDidMount () {  // I still need to learn more about React components lifecycles
        axios.get (BASE_URL + this.state.symbol) // I only read to use this one after it is rendered, which gave me trouble.
            .then( response => {
                this.setState({ company: response.data.profile, symbol: response.data.symbol });
                console.log(response.data.profile)
            })
    }

    render() {
        const company = this.state.company
        const symbol = this.state.symbol

        return (
            <div className="Card">
                <CardLabels />
                {/* {console.log(company.companyName)}
                {console.log(company.website)}
                {console.log(company.price)} */}
                <CardData 
                    companyName={company.companyName}
                    website={company.website}
                    changesPercent={company.changesPercentage}
                    price={company.price}
                    symbol={symbol}
                />
                {/* <ul className="Card__Data">
                    <li><span>Company Name : {Link(company.website, company.companyName)}</span></li>
                    <li><span>Changes by % : {!parsedChange ? "Loading..." : parsedChange}</span></li>
                    <li><span>Price : ${company.price}</span></li>
                    <li><span>Symbol : {company.symbol}</span></li>

                </ul> */}
            </div>
                    )

    }
}

export default Card;