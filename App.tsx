import * as React from 'react';
import './style.css';

export default function App() {
  return (
    ({ name }) => <h1>Hello {name}!</h1>
  );
}

// import React from 'react';

// export default ({ name }) => <h1>Hello {name}!</h1>;
