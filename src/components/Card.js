import React from 'react';
import Link from './Link';
// import axios from 'axios';

// const BASE_URL = "https://financialmodelingprep.com/api/v3/company/profile/AAPL"

const card = (props) => {

    const linkStylePos = {  // Kept styling ultra simple, no need for a CSS file
        color: 'green'
    }
    const linkStyleNeg = {
        color: 'red'
    }

    const num = parseFloat(props.change);
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
        <div className="Card" >
            <li><span>Company Name : {Link(props.website, props.companyName)}</span></li>
            {/* <li><span>Change : {!parsedChange ? "Loading..." : parsedChange}</span></li> */}
            <li><span>Price : ${props.price}</span></li>
        </div>
    )
};
export default card;

// class Card extends Component {
//     state = {
//         company: [this.props]
//     }

//     // componentDidMount () {  // I still need to learn more about React components lifecycles
//     //     // axios.get (BASE_URL) // I only read to use this one after it is rendered, which gave me trouble.
//     //     //     .then( response => {
//     //     //         this.setState({ company: response.data.profile });
//     //     //         // console.log(response.data.profile)
//     //     //     })
//     // }


//     render() {
//         const company = this.state.company

//         const linkStylePos = {  // Kept styling ultra simple, no need for a CSS file
//             color: 'green'
//         }
//         const linkStyleNeg = {
//             color: 'red'
//         }

//         const num = parseFloat(this.props.change);
//         const parsedChange = (
//             <div>
//                 {
//                     num < 0 ? 
//                     <span style={linkStyleNeg}>{num}</span> :
//                     <span style={linkStylePos}>{num}</span> 
//                 }
//             </div>
//         )

//         return (
//             <div className="Card" >
//                 <li><span>Company Name : {Link(this.props.website, this.props.companyName)}</span></li>
//                 <li><span>Change : {!parsedChange ? "Loading..." : parsedChange}</span></li>
//                 <li><span>Price : ${this.props.price}</span></li>
//             </div>
//         )

//     }

// }

// export default Card;