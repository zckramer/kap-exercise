import React, { Component } from 'react';
import Link from '../Link/Link';
import axios from 'axios';

const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

class Card extends Component {
    state = {
        company: []
    }

    componentDidMount () {  // I still need to learn more about React components lifecycles
        axios.get (BASE_URL) // I only read to use this one after it is rendered, which gave me trouble.
            .then( response => {
                this.setState({ company: response.data.profile });
                console.log(response.data.profile)
            })
    }

    render() {
        const company = this.state.company

        const linkStylePos = {  // Kept styling ultra simple, no need for a CSS file
            color: 'green'
        }
        const linkStyleNeg = {
            color: 'red'
        }

        const num = parseFloat(company.changes);
        const parsedChange = (
            <div>
                {
                    num < 0 ? 
                    <span style={linkStyleNeg}>{num}</span> :
                    <span style={linkStylePos}>{num}</span> 
                }
            </div>
        )

        return (
            <div className="Card">
                <li><span>Company Name : {Link(company.website, company.companyName)}</span></li>
                <li><span>Changes by % : {!parsedChange ? "Loading..." : parsedChange}</span></li>
                <li><span>Price : ${company.price}</span></li>
            </div>
        )

    }

}

export default Card;