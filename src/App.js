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
      menuIsVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible
    });
  }

  handleMouseDown = (event) => {
    this.toggleMenu();
    event.stopPropagation();
  }



  render() {
    return (
      <div className='border'>
        <div className='logo'>
          <Link to={'/'} className='logo-link' title='Home'>Brian</Link>
        </div>
        <div className='social-media-container'>
          <a href='https://github.com/brimac1634' target='_blank' rel='noopener noreferrer'><img src={github} alt='GitHub'/></a>
          <a href='https://www.linkedin.com/in/brian-macpherson-414b6126/' target='_blank' rel='noopener noreferrer'><img src={linkedin} alt='LinkedIn'/></a>
          <a href='https://www.facebook.com/brimac1634' target='_blank' rel='noopener noreferrer'><img src={facebook} alt='Facebook'/></a>
        </div>
        <MainView className='main-view'/>
        <SlideMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.menuIsVisible}/>
      </div>
    );
  }
}

export default App;
