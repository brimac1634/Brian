import React from 'react';

const SlideMenu = () => {
	return (
		<div className='slide-menu'>
			<div className='nav-list'>
			    <Link to={'/'} className='link' title='About'>About.</Link>
			    <Link to={'/Projects'} className='link' title='Projects'>Projects.</Link>
			    <Link to={'/Contact'} className='link' title='Contact'>Contact.</Link>
			</div>
		</div>
	);
}