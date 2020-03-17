import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Card/Card'
const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/"

class Header extends Component {
    state = {
        company: [],
        userInput: '',
        showCard: false
    }
    
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
        console.log(this.state.userInput)
    }

    onSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.userInput)
        axios.get ( BASE_URL + this.state.userInput )
        .then( response => {
            this.setState({ company: response.data.profile });
            this.setState({ showCard: true })
            console.log(this.state.showCard)

        })
    }

    // componentDidMount () { 
    //     axios.get (BASE_URL) 
    //         .then( response => {
    //             this.setState({ company: response.data.profile });
    //             console.log(this.state.company)
    //         })
    // }

    render() {
        return (
            <div>
            <form>
                <label>
                    Ticker Symbol:
                    <input
                        type="text" 
                        // userInput='userInput'
                        value={this.state.userInput}
                        onChange={e => this.handleChange(e)}
                        ref={(input) => {this.input = input;}} />
                </label>
                <button onClick={(e) => this.onSubmit(e)}>Send</button>         
            </form>
            {this.state.showCard===true ? <Card userInput={this.state.userInput}/> : 'Enter a company ticker symbol to get info'}
            </div>
        );
    }
}

export default Header;