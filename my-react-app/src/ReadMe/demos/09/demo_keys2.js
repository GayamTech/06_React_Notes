import React from 'react';
import ReactDOM from 'react-dom';

function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    {id: 1, brand: 'Ford'},
    {id: 2, brand: 'BMW'},
    {id: 3, brand: 'Audi'}
  ];
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <ol>
        {cars.map((car) => <li Car key={car.id}> brand={car.brand}</li>)}
      </ol>
    </>
  );
}

ReactDOM.render(<Garage />, document.getElementById('root'));

