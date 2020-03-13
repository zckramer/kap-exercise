import React, { Component } from 'react';
import Link from '../Link/Link';
import axios from 'axios';

const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

class Card extends Component {
    state = {
        company: []
    }

    componentDidMount () {
        axios.get (BASE_URL)
            .then( response => {
                this.setState({ company: response.data.profile });
                console.log(response.data.profile)
            })
    }

    render() {
        const company = this.state.company
        
        return (
            <div className="Card">
                <li><span>Company Name : {Link(company.website, company.companyName)}</span></li>
                <li><span>Changes by % : {company.changesPercentage}</span></li>
                <li><span>Price : ${company.price}</span></li>
            </div>
        )

    }

}

export default Card;