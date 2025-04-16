import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Topics from './pages/Topics';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import GradeSection from './pages/GradeSection';
import Registration from './pages/Registration';
import PurpleFire from './components/PurpleFire';
import PurpleLightning from './components/PurpleLightning';
import ShiningDiamond from './components/ShiningDiamond';
import ContentShine from './components/ContentShine';
import LevelDetails from './pages/LevelDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 relative overflow-hidden">
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-gray-900 to-gray-900 pointer-events-none" />
        <ContentShine />
        <div className="relative z-10 content-wrapper">
          <Navbar />
          <main className="py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/grade/:grade" element={<GradeSection />} />
              <Route path="/topics" element={<Topics />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/level/:level" element={<LevelDetails />} />
            </Routes>
          </main>
        </div>
        <PurpleFire />
      </div>
    </Router>
  );
}

export default App;
