import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Learn from './pages/Learn/Learn';
import Lesson from './pages/Lesson/Lesson';
import LessonCreator from './pages/LessonCreator/LessonCreator';
import Admin from './pages/Admin/Admin';
import Guidebook from './pages/Guidebook/Guidebook';
import GuidebookHub from './pages/GuidebookHub/GuidebookHub';
import Leaderboard from './pages/Leaderboard/Leaderboard';
import Quests from './pages/Quests/Quests';
import Shop from './pages/Shop/Shop';
import Profile from './pages/Profile/Profile';
import Layout from './components/Layout/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Main App Routes with Sidebar Layout */}
        <Route path="/learn" element={<Layout><Learn /></Layout>} />
        <Route path="/guidebook-hub" element={<Layout><GuidebookHub /></Layout>} />
        <Route path="/leaderboard" element={<Layout><Leaderboard /></Layout>} />
        <Route path="/quests" element={<Layout><Quests /></Layout>} />
        <Route path="/shop" element={<Layout><Shop /></Layout>} />
        <Route path="/profile" element={<Layout><Profile /></Layout>} />

        {/* Standalone Routes */}
        <Route path="/lesson/:lessonId" element={<Lesson />} />
        <Route path="/create-lesson" element={<LessonCreator />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/guidebook/:unitId" element={<Guidebook />} />
        <Route path="/login" element={<div className="container"><h1>Login (Coming Soon)</h1></div>} />
      </Routes>
    </Router>
  );
}

export default App;
