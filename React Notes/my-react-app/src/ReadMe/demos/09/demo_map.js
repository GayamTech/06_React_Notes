import React from 'react';
import ReactDOM from 'react-dom';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

/*
If you run this example in your create-react-app,
you will receive a warning that there is no "key" provided for the list items.
*/
