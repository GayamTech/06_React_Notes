import React from 'react';
import ReactDOM from 'react-dom';

const x = 5;

const myelement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

ReactDOM.render(myelement, document.getElementById('root'));

localhost:3000
