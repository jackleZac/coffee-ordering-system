import './index.css';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <Router>
        <Header />  
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
  )
}

export default App
