import React from 'react';
//import Hello from './SayHello';
import Tweet from './Tweet'
import GuessTheNumber from './GuessTheNumber';
import logo from './logo.svg';

function App() {
  
  return (
    <div className='App'>
      <div className='GuessTheNumbers'>
        <GuessTheNumber />
        <GuessTheNumber min={1} max={50} />
        <GuessTheNumber min={1} max={5} />
      </div>
    </div>
  );
}

/*
function App() {
  
  return (
    <div className='App'>
      <img src={logo} className="App-logo" alt="logo" />
      <div className='Tweets'>
        <Tweet name='Pure Clickbait' message='Please click me..' likesCount={5670}/>
        <Tweet name='End is near..' message='The world ends at 5pm..' likesCount={120}/>
        <Tweet name='Winter is coming' message='I am the only true king.' likesCount={67900}/>
        <Tweet name='WTF Japan' message='Oh lord...' likesCount={99}/>
      </div>
    </div>
  );
}
*/

export default App;