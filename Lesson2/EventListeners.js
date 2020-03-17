// Los elementos JSX pueden tener oyentes de eventos , al igual que los elementos HTML.

// Puede crear un detector de eventos dando a un elemento JSX un atributo especial

<img onClick={myFunc} />

// El ejemplo anterior solo funcionaría si myFuncfuera una función válida que se hubiera definido en otra parte

function myFunc() {
    alert('Make myFunc the pFunc... omg that was horrible i am so sorry');
}

<img onClick={myFunc} />

// Example
// En JSX, los nombres de escucha de eventos se escriben en camelCase, como onClicko onMouseOver.

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
    onClick={makeDoggy} />
);

ReactDOM.render(kitty, document.getElementById('app')
);