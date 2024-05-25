import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Quests from './pages/Quests';
import Leaderboard from './pages/Leaderboard';
import Register from './pages/Register';
import OpeningPage1 from './pages/opening-page1';
import SwipeComponent from './components/SwipeComponent';
import ServeQuestTitle from './components/ServeQuestTitle'; // Import the new component

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between pb-20">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/opening-page1" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/register" element={<Register />} />
            <Route path="/opening-page1" element={<OpeningPage1 />} />
            <Route path="/swipe" element={<SwipeComponent />} /> {/* Add the SwipeComponent route */}
            <Route path="/title" element={<ServeQuestTitle />} /> {/* Add the new route */}

          </Routes>
        </main>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
