import React from 'react';
import './SocialMediaButtons.css';
import github from './github.svg';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';


const SocialMediaButtons = () => {
	return(
		<div className='social-media-container'>
          <a href='https://github.com/brimac1634' target='_blank' rel='noopener noreferrer'><img src={github} alt='GitHub'/></a>
          <a href='https://www.linkedin.com/in/brian-macpherson-414b6126/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='LinkedIn'/></a>
          <a href='https://www.facebook.com/brimac1634' target='_blank' rel='noopener noreferrer'><img src={facebook} alt='Facebook'/></a>
        </div>
	);
}
export default SocialMediaButtons;