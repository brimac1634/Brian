import React from 'react';
import './About.css';
import Brian from './Brian.jpg';

const About = () => {
	return (
		<div className='about'>
				<section className='header'>
					<div className='white-div'/>
					<div className='title'>
						<h1 className='animate-pop-in'><strong>Brian <br/>MacPherson</strong></h1>
						<h2 className='animate-pop-in'>Full Stack Developer
						<br/>Hong Kong</h2>
					</div>
				</section>
				<section className='section-about'>
					<h2 className='animate-pop-in'>Brian Who?</h2>
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
		</div>
	);
}
export default About;