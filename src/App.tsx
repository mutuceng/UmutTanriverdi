import './index.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import BackgroundDecor from './components/BackgroundDecor';
import Header from './components/Header';
import About from './pages/About';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#1d1320] font-space-grotesk overflow-hidden z-0">
      <BackgroundDecor />
      <Header />
      
      <main className="flex-grow layout-container flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects/details/:id" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
