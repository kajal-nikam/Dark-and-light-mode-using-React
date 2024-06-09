import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode());

  useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode));
  }, [darkMode]);

  function getInitialMode() {
    const isReturningUser = 'dark' in localStorage;
    const savedMode = JSON.parse(localStorage.getItem('dark'));
    const userPrefersDark = getPrefColorScheme();

    if (isReturningUser) {
      return savedMode;
    } else if (userPrefersDark) {
      return true;
    } else {
      return false;
    }
  }

  function getPrefColorScheme() {
    if (!window.matchMedia) return;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  return (
  <div className='container'> 

    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <nav>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(prevMode => !prevMode)} />
          <span className="slider round"></span>
        </label>
      </nav>
      <div className="content">
        <h1>{darkMode ? 'Dark Mode' : 'Light Mode'}</h1>
        <p>Toggle dark mode to see the magic happen!</p>
      </div>
      </div>
      
    </div>
  );
}

export default App;
