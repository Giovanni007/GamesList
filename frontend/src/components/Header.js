import React from 'react';
import logo from '../logo.svg';
import sony_logo from '../Sony_logo.svg';


function Header() {
    return (
      <div className="App">
        <header className="App-header">
            <div id="sony-bar" class="sony-bar">
                <img src={sony_logo} className="sony-logo" alt="sony_logo" />
            </div>
            <img src={logo} className="App-logo" alt="logo" />         
        </header>
      </div>
    );
  
  }

  export default Header;
