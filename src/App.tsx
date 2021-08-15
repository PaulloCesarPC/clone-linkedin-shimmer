import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import MobileHeader from './components/MobileHeader';
import DesktopHeader from './components/DesktopHeader';

function App() {
  return (
    <BrowserRouter>
      <MobileHeader></MobileHeader>
      <DesktopHeader></DesktopHeader>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;


