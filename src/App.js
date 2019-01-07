import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import SocialMediaButtons from './Components/SocialMediaButtons/SocialMediaButtons';
import MainView from './MainView/MainView';
import MenuButton from './Components/MenuButton';
import SlideMenu from './Components/SlideMenu';

class App extends Component {
  constructor (props, context) {
    super(props, context);
    this.state = {
      menuIsVisible: false,
      peakIsVisible: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.Peak = this.peak.bind(this);
    this.removePeak = this.removePeak.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible
    });
  }

  peak() {
    this.setState({
      peakIsVisible: true
    })
  }

  removePeak() {
    this.setState({
      peakIsVisible: false
    })
  }

  handleMouseDown = (event) => {
    this.setState({
      peakIsVisible: false
    })
    this.toggleMenu();
    
    event.stopPropagation();
  }

  handleMouseOver = (event) => {
    if (!this.state.menuIsVisible) {
      this.peak();
    }
  }

  handleMouseOut = (event) => {
    if (!this.state.menuIsVisible) {
      this.removePeak();
    }
  }


  render() {
    return (
      <div className='border'>
        <div className='logo'>
          <Link to={'/'} className='logo-link' title='Home'>Brian</Link>
        </div>
        <SocialMediaButtons />
        <MainView className='main-view'/>
        <SlideMenu menuVisibility={this.state.menuIsVisible} peakVisibility={this.state.peakIsVisible} handleMouseDown={this.handleMouseDown}/>
        <MenuButton className='menu-button' handleMouseDown={this.handleMouseDown} menuVisibility={this.state.menuIsVisible} handleMouseOver={this.handleMouseOver} handleMouseOut={this.handleMouseOut} />
      </div>
    );
  }
}

export default App;
