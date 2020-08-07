import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <div className="app">
      <div>
     <Sidebar/>
     </div>
     <div className='feed'>
       Feed
     </div>
     <div className='widgets'>
        Widgets
     </div>
    </div>
  );
}

export default App;
