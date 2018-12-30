import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import github from './github.svg';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import MainView from './MainView/MainView';
import AnimatedMenuIcon from './Components/AnimatedMenuIcon';
import SlideMenu from './Components/SlideMenu';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      menuIsOn: false,
    }
  }

  componentDidMount() {

  }

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
        <MainView className='main-view'/>
        <div className='menu-button-container'>
          <button type='button' ref='menuButton' className='menu-button'>Menu</button>
        </div>
        <div className='slide-menu'>
          <SlideMenu />
        </div>
      </div>
    );
  }
}

export default App;
