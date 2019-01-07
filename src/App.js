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
    this.togglePeak = this.togglePeak.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
  }

  toggleMenu() {
    this.setState({
      menuIsVisible: !this.state.menuIsVisible
    });
  }

  togglePeak() {
    this.setState({
      peakIsVisible: !this.state.peakIsVisible
    })
  }

  handleMouseDown = (event) => {
    this.toggleMenu();
    this.setState({
      peakIsVisible: this.state.menuIsVisible ? true : false
    })
    console.log(this.state.peakIsVisible);
    event.stopPropagation();
  }

  handleMouseOver = (event) => {
    if (!this.state.menuIsVisible) {
      this.togglePeak();
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
        <SlideMenu menuVisibility={this.state.menuIsVisible} peakVisibility={this.state.peakIsVisible}/>
        <MenuButton className='menu-button' handleMouseDown={this.handleMouseDown} menuVisibility={this.state.menuIsVisible} handleMouseOver={this.handleMouseOver} />
      </div>
    );
  }
}

export default App;
