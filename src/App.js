import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import SocialMediaButtons from './Components/SocialMediaButtons/SocialMediaButtons';
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
        <SocialMediaButtons />
        <MainView className='main-view'/>
        <SlideMenu handleMouseDown={this.handleMouseDown} menuVisibility={this.state.menuIsVisible}/>
      </div>
    );
  }
}

export default App;
