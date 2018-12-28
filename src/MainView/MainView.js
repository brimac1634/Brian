import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const MainView = () => {
	return (
		<div className='main-view'>
			<Switch>
				<Route exact path='/' component={About}/>
				<Route path='/Projects' component={Projects}/>
				<Route path='/Contact' component={Contact}/>
			</Switch>
		</div>
	);
}

export default MainView;