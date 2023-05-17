import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Portfolio from './pages/Portfolio';
import "./App.css"

function App() {
    return (
        <Router>
            <nav className="navbar">
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="/"
                       element={<Home/>}/>
                <Route path="/about"
                       element={<About/>}/>
                <Route path="/blogs"
                       element={<Blogs/>}/>
                <Route path="/portfolio"
                       element={<Portfolio/>}/>
            </Routes>
        </Router>
    );
}

export default App;
