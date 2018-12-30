import React from 'react';
import {Link} from 'react-router-dom';
import './SlideMenu.css';
import MenuButton from './MenuButton';

const SlideMenu = ({handleMouseDown, menuVisibility}) => {

	var visibility = 'hide';

	if (menuVisibility) {
		visibility = 'show';
	}

	return (
		<div className={visibility}>
			<div className='menu-logo'><h3>Brian</h3></div>
			<div className='separator'></div>
			<div className='nav-list'>
			    <Link to={'/'} className='link' title='About' onMouseDown={handleMouseDown}>About.</Link>
			    <Link to={'/Projects'} className='link' title='Projects' onMouseDown={handleMouseDown}>Projects.</Link>
			    <Link to={'/Contact'} className='link' title='Contact' onMouseDown={handleMouseDown}>Contact.</Link>
			</div>
			<div className='separator'></div>
			<div className='contact-info'>
				<p><strong>Brian MacPherson</strong></p>
				<a href='mailto:brimac1634@gmail.com?Subject=Nice%20to%20meet%20you!' target='_top'>brimac1634@gmail.com</a>
				<br/>
				<a href='tel:+852-6897-2280'>+852-6897-2280</a>
			</div>
			<div className='menu-button'>
				<MenuButton handleMouseDown={handleMouseDown} visibility={menuVisibility}/>
			</div>
		</div>
	);
}

export default SlideMenu;