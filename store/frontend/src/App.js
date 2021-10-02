import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from 'views/LandingPage/LandingPage';
import { GlobalStyle } from './globalStyles';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <LandingPage/>
    </Router>
  );
}

export default App;
