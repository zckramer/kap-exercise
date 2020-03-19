import React from "react";
import Link from "../Link/Link";

function CardData(props) {
	return (
		<div className='Card-Data'>
			<li>
				<span id="Card-Data__Name" >{Link(props.website, props.companyName)}</span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Symbol" >{props.symbol}</span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__CEO" >{props.ceo} </span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Exchange" >{props.exchange} </span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Industry" >{props.industry} </span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Sector" >{props.sector} </span>
			</li>
			<hr />
			<li>
				<span 
					id="Card-Data__Changes-Percent" 
					style={props.changesPercent && props.changesPercent.includes("-") ? 
					{color: 'red'} : {color: 'green'}}>
					{props.changesPercent}
                </span>
			</li>
			<hr />
			<li>
				<span 
					id="Card-Data__Changes"
					style={props.changes < 0 ? 
					{color: 'red'} : {color: 'green'}}>
					{props.changes}
				</span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Price" >{props.price} </span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Beta" >{props.beta} </span>
			</li>
			<hr />
			<li>
				<span id="Card-Data__Volume-Average" >{props.volAvg} </span>
			</li>
			<hr />
			<li>
				<div id="Card-Data__Description" >{props.description}</div>
			</li>
		</div>
	);
}

export default CardData;