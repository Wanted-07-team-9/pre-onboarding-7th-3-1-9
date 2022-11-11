import React from 'react';
import { Route, Routes, BrowserRouter as Router, Navigate } from 'react-router-dom';
import SearchPage from './pages/SearchPage/index';
import GlobalStyle from './GlobalStyle';
import ErrorPage from './pages/ErrorPage/index';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/main" />} />
          <Route path="/main" element={<SearchPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
