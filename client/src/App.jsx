import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CreateAccount from './pages/CreateAccount'
import UserReviews from './pages/UsersReviews'
import SeeMoreReview from './pages/SeeMoreReview'

function App() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    return (
        <div className={`main-content ${isDarkMode}`}></div>
    )
}



export default App;
