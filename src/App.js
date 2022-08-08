import './Variables.css';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="projects" element = {<ProjectList />}/>
        <Route path="skills" element = {<Skills />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
