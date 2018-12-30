import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import github from './github.svg';
import linkedin from './linkedin.svg';
import facebook from './facebook.svg';
import MainView from './MainView/MainView';
import SlideMenu from './Components/SlideMenu';

class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      menuIsVisible: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible
    });
  }

  handleClick(e) {
    this.toggleMenu();
    console.log('clicked');
    e.stopPropagation();
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
        <div className='slide-menu'>
          <SlideMenu />
        </div>
      </div>
    );
  }
}

export default App;
