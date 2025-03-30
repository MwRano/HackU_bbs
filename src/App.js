import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import IdeaInputPage from './pages/IdeaInputPage';
import FeedBackPage from './pages/FeedBackPage';
import ReIdeaInputPage from './pages/ReIdeaInputPage';
import ResultPage from './pages/ResultPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ideainput" element={<IdeaInputPage />} />
        <Route path="/feedback" element={<FeedBackPage />} />
        <Route path="/reideainput" element={<ReIdeaInputPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;
