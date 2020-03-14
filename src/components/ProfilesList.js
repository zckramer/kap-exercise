import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';

const BASE_URL = 'https://financialmodelingprep.com/api/v3/company/profile/'

class ProfilesList extends Component {
    state = {
        userInput: [],
        companyData: [],
        shouldDisplayCard: false
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
                this.setState({companyData: res.data})
            })
            .then(this.setState({shouldDisplayCard:true}))
    }
    
    render () {
        const Button = <button onClick={(e) => this.onSubmit(e)}>Submit</button>
        const Input = <input
                        placeholder='symbol'
                        value={this.state.userInput}
                        onChange={e => this.handleChange(e)}
                        />
        
        return (
            
            <div>
                <form>
                    {Input}
                    {Button}
                </form>
                <main className="CardContainer">
                    
                    {this.state.shouldDisplayCard ? 
                        <Card 
                        shouldDisplayCard={this.state.shouldDisplayCard}
                        symbol={this.state.companyData.symbol} 
                        data={this.state.companyData}
                        
                        /> : <p>Type a company's symbol to get their info</p>
                    }
                </main>
            </div>
        )
    }
}

export default ProfilesList