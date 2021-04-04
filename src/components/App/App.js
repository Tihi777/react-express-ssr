import React, {useState} from 'react';
import './App.scss';

export const App = () => {
  const [state, setState] = useState(0);
  return (
    <div className="app">
      <h1>Counter: {state}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aliquid architecto cum ducimus magni mollitia nam non
        perspiciatis, placeat, praesentium recusandae sed suscipit.
        Cum cumque eveniet, libero magni nemo repellat voluptas.
      </p>
      <button onClick={() => setState(prevState => prevState + 1)}>Button</button>
    </div>
  );
}