import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import github from './github.svg';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import MainView from './MainView/MainView';
import AnimatedMenuIcon from './Components/AnimatedMenuIcon';

class App extends Component {
  render() {
    return (
      <div className='border'>
        <div className='logo'>
          <Link to={'/'} className='logo-link' title='Home'>Brian</Link>
        </div>
        <div className='social-media-container'>
          <a href='#'><img src={github} alt='GitHub'/></a>
          <a href='#'><img src={linkedin} alt='LinkedIn'/></a>
          <a href='#'><img src={facebook} alt='Facebook'/></a>
        </div>
        <div className='main-view'>
          <MainView />
        </div>
        <div className='menu-button-container'>
          <AnimatedMenuIcon />
          <button type='button' className='menu-button'>Menu</button>
        </div>
      </div>
    );
  }
}

export default App;
