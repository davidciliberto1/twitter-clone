import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="app">
      <div className='widgets'>
       <Widgets/>
     </div>
      <div>
     <Sidebar/>
     </div>
     <div className='feed'>
       <Feed/>
     </div>
     
    </div>
  );
}

export default App;
