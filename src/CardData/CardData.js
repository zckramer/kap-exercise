import React from "react";
import Link from "../Link/Link";

function CardData(props) {
	return (
		<div className='Card__Data'>
			<li>
				<span>{Link(props.website, props.companyName)}</span>
			</li>
			<li>
                <span 
                style={props.changesPercent && props.changesPercent.includes("-") ? 
                {color: 'red'} : {color: 'green'}}>
                {props.changesPercent}
                </span>
			</li>
			<li>
				<span>{props.price}</span>
			</li>
			<li>
				<span>{props.symbol}</span>
			</li>
		</div>
	);
}

export default CardData;