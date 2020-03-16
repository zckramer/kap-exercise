import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

class Header extends Component {
    state = {
        company: [],
        userInput: '',
        showCard: []
    }
    
    handleChange = (e) => {
        this.setState({
            userInput: e.target.value
        })
        console.log(this.state.userInput)
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState()
    }

    componentDidMount () { 
        axios.get (BASE_URL) 
            .then( response => {
                this.setState({ company: response.data.profile });
                console.log(this.state.company)
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
                        userInput='userInput'
                        value={this.state.userInput}
                        onChange={e => this.handleChange(e)}
                        ref={(input) => {this.input = input;}} />
                </label>
                <button onClick={(e) => this.onSubmit(e)}>Send</button>         
            </form>
            </div>
        );
    }
}

export default Header;