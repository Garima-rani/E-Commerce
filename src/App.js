import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './customer/components/Navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

const App = () => {
  return (
    <div>
    <Router>
    
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Add more routes here */}
        </Routes>
      
    </Router>
    </div>
  );
};

export default App;
