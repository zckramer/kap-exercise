import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

const BASE_URL = 'https://financialmodelingprep.com/api/v3/company/profile/'

class ProfilesList extends Component {
    state = {
        userInput: [],
        companyData: []
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
    }
    
    onSubmit = (e) => {
        e.preventDefault();
        this.setState({userInput: e.target.value})
            axios.get(BASE_URL + this.state.userInput)
            .then(res => {
                this.setState({companyData: res})
                console.log(this.state.companyData)
            })
    }
    
    render () {
        const Button = <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        const Input = <input
                        placeholder='symbol'
                        value={this.state.userInput}
                        onChange={e => this.handleChange(e)}/>
        
        const company = this.state.companyData;                
        return (
            <div>
                <form>
                    {Input}
                    {Button}
                </form>
                <main className="CardContainer">
                    <Card 
                    symbol={company.symbol} 
                    companyName={company.companyName}
                    website={company.website}
                    
                    />
                </main>
            </div>
        )
    }
}

export default ProfilesList