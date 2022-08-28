import './assets/css/bootstrap.min.css'
import './assets/bootstrap-icons.css'
import './Variables.css';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import Skills from './pages/Skills';
import About from './pages/About';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="projects" element = {<ProjectList />}/>
        <Route path="skills" element = {<Skills />}/>
        <Route path="about" element = {<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
