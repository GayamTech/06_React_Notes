import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const Header = () => {
  return (
    <>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));
