import React from 'react';
import './About.css';
import Scroll from '../../Components/Scroll';
import Brian from './Brian.jpg';

const About = () => {
	return (
		<div className='about'>
			<Scroll>
				<section className='container header'>
					<div className='purple-div'/>
					<div className='row'>
						<div className='col'>
							<h1><strong>Brian <br/>MacPherson</strong></h1>
						</div>
						<div className='col'>
							<h2>Full Stack Developer
							<br/>Hong Kong</h2>
						</div>
					</div>
				</section>
				<section className='section-about'>
					<div className='row'>
						<h2>Brian Who?</h2>
					</div>
					<div className='row'>
						<div className='col'>
							<img src={Brian} alt='Brian'/>
						</div>
						<div className='col'>
							<h2>Full Stack Developer</h2>
							<p>I am a full stack developer with an aggressive desire to build great projects and an immense passion for incessantly learning. I am originally from New York but have made my way to Hong Kong, which I now call home. I find great excitement in exploring and trying new things (especially food), and I consider myself to be an avid linguist.</p>
						</div>
					</div>
				</section>
				<section className='section-skills'>
					<div className='row'>
						<h2>How can I help?</h2>
					</div>
				</section>
			</Scroll>
		</div>
	);
}
export default About;