import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import { Routes, Route } from 'react-router-dom'
import RepoPage from './pages/RepoPage';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="repo/:username" element={<RepoPage />} />  
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
