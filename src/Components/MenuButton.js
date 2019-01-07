import React from 'react';
import './MenuButton.css';

const MenuButton = ({handleMouseDown, handleMouseOver, menuVisibility}) => {

	var buttonState = 'open';

	if (menuVisibility) {
		buttonState = 'close';
	}



	return (
		<div>
			<button className='menu-button-container' onMouseDown={handleMouseDown} onMouseOver={handleMouseOver} onMouseOut={handleMouseOver}>
				<div className={buttonState}>
				  <div></div>
				</div>
				Menu
			</button>
		</div>
	);
}
export default MenuButton;