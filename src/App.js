import "./assets/scss/styles.scss";
import React from 'react';
import BackgroundImage from './components/BackgroundImage/backgroundImage';
import Body from './components/Body/body';

function App() {
  return (
    <div className="App">
      <BackgroundImage />
      <Body />
    </div>
  );
}

export default App;
