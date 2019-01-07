import React from 'react';
import './MenuButton.css';

const MenuButton = ({handleMouseDown, handleMouseOver, handleMouseOut, menuVisibility}) => {

	var buttonState = 'open';
	var menuState = 'menu-closed';

	if (menuVisibility) {
		buttonState = 'close';
		menuState = 'menu-open';
	}



	return (
		<div>
			<button className={menuState} onMouseDown={handleMouseDown} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				<div className={buttonState}>
				  <div></div>
				</div>
				Menu
			</button>
		</div>
	);
}
export default MenuButton;