import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Navbar,
  LandingPage,
  AdminHome,
} from 'components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
