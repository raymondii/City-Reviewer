import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';

import { useStore } from '../../store';
import { useMutation, gql } from '@apollo/client';

return (
    <header className='row justify-between align-center'>
        <h3>City Reviewer</h3>

        <nav className='row align-center'>
            {state.user ? (
                <>
                    <p>Welcome, {state.user.username}</p>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink className='nav-btn' to='/dashboard'>
                        Dashboard
                    </NavLink>
                    <NavLink className='nav-btn' to='/writeareview'>
                        Write a Review
                    </NavLink>
                    <NavLink className='nav-btn' to='/login'>
                        Login
                    </NavLink>
                    {/* <button onClick={showModal} className="nav-btn create">Create Note</button> */}
                    <button className='nav-btn' onClick={handleLogoutUser}>
                        Log Out
                    </button>
                </>
            ) : (
                <>
                    {/* <NavLink to="/">Home</NavLink> */}
                    {/* <NavLink to="/auth">Login | Register</NavLink> */}
                </>
            )}
        </nav>
    </header>
);

export default Header;