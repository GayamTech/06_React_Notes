import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <>
      <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}

ReactDOM.render(<Header />, document.getElementById('root'));
