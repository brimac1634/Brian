import React from 'react';
import './MenuButton.css';

const MenuButton = ({handleMouseDown, visibility}) => {

	var buttonState = 'open';

	if (visibility) {
		buttonState = 'close';
	}

	return (
		<div>
			<button className='menu-button-container' onMouseDown={handleMouseDown}>
				<div className={buttonState}>
				  <div></div>
				</div>
				Menu
			</button>
		</div>
	);
}
export default MenuButton;