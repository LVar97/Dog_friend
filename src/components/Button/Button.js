import React from 'react';
import "./Button.css";

function Button({value, onButtonClick}){
	
	function handleClick(){
		onButtonClick(value);
	}

	return(
		<button className="promo__keyboard_btn" onClick={handleClick}>{value}</button>
	);
}

export default Button;
