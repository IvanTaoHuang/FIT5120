import React from 'react';
import logo from './headerImage.jpeg'; // Tell webpack this JS file uses this image
import './Header.css'

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return <img class="image" style ={{
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }} src={logo} alt="Logo" />;
}

export default Header;