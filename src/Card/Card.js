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
                <CardData 
                    companyName={company.companyName}
                    website={company.website}
                    ceo={company.ceo}
                    description={company.description}
                    changes={company.changes}
                    changesPercent={company.changesPercentage}
                    price={company.price}
                    mktCap={company.mktCap}
                    range={company.range}
                    lastDiv={company.lastDiv}
                    industry={company.industry}
                    exchange={company.exchange}
                    sector={company.sector}
                    beta={company.beta}
                    volAvg={company.volAvg}
                    symbol={symbol}
                />
            </div>
        )

    }
}

export default Card;