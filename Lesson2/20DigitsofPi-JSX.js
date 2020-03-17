import React from 'react';
import ReactDOM from 'react-dom';

const pi = (
  <div>
    <h1>
      PI, YALL!
    </h1>
    <p>
      {Math.PI.toFixed(20)}
    </p>
  </div>
);

// example Math
const math = (
    <h1>
      2 + 3 = {2 + 3}
    </h1>
);

ReactDOM.render(
	pi, 
	document.getElementById('app')
);

// Example 

import React from 'react';
import ReactDOM from 'react-dom';

const goose = 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose}  />
      
ReactDOM.render(
gooseImg,
document.getElementById('app')
);

