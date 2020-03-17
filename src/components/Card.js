import React from 'react';
import Link from './Link';

const card = props => {
    // console.log(props.data.profile)
    const linkStylePos = {
        color: 'green'
    }
    const linkStyleNeg = {
        color: 'red'
    }
    
    function handleParsedChanges() {
        const num = parseFloat(props.data.profile.changes);
        const parsedChange = (
            <div>
            {
                num < 0 ? 
                <span style={linkStyleNeg}>{num}</span> :
                <span style={linkStylePos}>{num}</span> 
            }
            </div>
        )
        return parsedChange;
    }

    return (
        <div className="Card" >
            <li><span>Company Name : {props.data.profile ? Link(props.data.profile.website, props.data.profile.companyName) : 'Loading' }</span></li>
            <li><span>Change : {props.data.profile ? handleParsedChanges() : <div>Loading</div>}</span></li>
            <li><span>Price : ${props.data.profile  ? props.data.profile.price : `Loading` }</span></li>
            <li><span>Symbol : {props.symbol}</span></li>
        </div>
    )
};
export default card;