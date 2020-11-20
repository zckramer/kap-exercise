import React, { Component } from 'react';
import axios from 'axios';
import Card from '../Card/Card'
const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/"

class Header extends Component {
    state = {
        company: [],
        hasError: false,
        userInput: '',
        showCard: false
    }
    
    componentDidCatch(error, info) {
        this.setState({ hasError: true })
        this.setState({ showCard: false })
        console.log("Caught an error")
    }

    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
        // console.log(e.target.value)
    }

    onSubmit = (e) => {
        e.preventDefault();
        axios.get ( BASE_URL + this.state.userInput + "?apikey=" + "f3cadaf0569807e5dd47e435a6d8c5a6" )
        .then( response => {
            this.setState({ showCard: false })
            this.setState({ company: [] })
            this.setState({ company: response.data.profile });
            if (response.data.profile === undefined) {
                this.setState({ hasError: true })
            } else {
                this.setState({ hasError: false })
                this.setState({ showCard: true })
                console.log(this.state.showCard)
            }
        })
    }

    render() {
        return (
            <div>
            <form>
                <label>
                    Ticker Symbol:
                    <input
                        type="text" 
                        value={this.state.userInput}
                        onChange={e => this.handleChange(e)}
                        ref={(input) => {this.input = input;}} />
                </label>
                <button onClick={(e) => this.onSubmit(e)}>Send</button>         
            </form>
            {this.state.hasError ? <span>Can not find a company related to the symbol entered... </span> : ""}
            {this.state.showCard===true ? <Card userInput={this.state.userInput}/> : 'Enter a company ticker symbol to get info'}
            </div>
        );
    }
}

export default Header;