import React from 'react';
import {Link} from 'react-router-dom';
import './SlideMenu.css';

const SlideMenu = ({handleMouseDown, menuVisibility, peakVisibility}) => {

	var visibility = 'hide';
	var animate = 'none';

	if (menuVisibility) {
		visibility = 'show';
		animate = 'animate-pop-in';
	} else {
		animate = 'animate-pop-out'
	}

	if (peakVisibility) {
		visibility = 'peak';
	}


	return (
		<div className={visibility}>
			<div className='menu-logo'><h3>Brian</h3></div>
			<div className='separator'></div>
			<div className='nav-list'>
			    <Link to={'/'} className={`link ${animate} first`} title='About' onMouseDown={handleMouseDown}>About.</Link>
			    <Link to={'/Projects'} className={`link ${animate} second`} title='Projects' onMouseDown={handleMouseDown}>Projects.</Link>
			    <Link to={'/Contact'} className={`link ${animate} third`} title='Contact' onMouseDown={handleMouseDown}>Contact.</Link>
			</div>
			<div className='separator'></div>
			<div className='contact-info'>
				<p><strong>Brian MacPherson</strong></p>
				<a href='mailto:brimac1634@gmail.com?Subject=Nice%20to%20meet%20you!' target='_top'>brimac1634@gmail.com</a>
				<br/>
				<a href='tel:+852-6897-2280'>+852-6897-2280</a>
			</div>
		</div>
	);
}

export default SlideMenu;