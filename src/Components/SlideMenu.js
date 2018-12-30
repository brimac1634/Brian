import React from 'react';
import {Link} from 'react-router-dom';
import './SlideMenu.css';

const SlideMenu = () => {
	return (
		<div className='slide-menu'>
			<div className='menu-logo'><h3>Brian</h3></div>
			<div className='separator'></div>
			<div className='nav-list'>
			    <Link to={'/'} className='link' title='About'>About.</Link>
			    <Link to={'/Projects'} className='link' title='Projects'>Projects.</Link>
			    <Link to={'/Contact'} className='link' title='Contact'>Contact.</Link>
			</div>
			<div className='separator'></div>
			<div className='contact-info'>
				<p><strong>Brian MacPherson</strong></p>
				<p>brimac1634@gmail.com</p>
				<p>+852-6897-2280</p>
			</div>
		</div>
	);
}

export default SlideMenu;