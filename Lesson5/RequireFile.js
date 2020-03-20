// Para importar una variable, puede usar una importdeclaración:

// Si su ruta de archivo no tiene una extensión de archivo, se asume ".js"

import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './NavBar'; // Require file


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah </p>
        <img src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}

