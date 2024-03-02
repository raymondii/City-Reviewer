import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './header.css';

import { useStore } from '../store';
import { useMutation, gql } from '@apollo/client';

const Header = () => {
    const { state, dispatch } = useStore();
    const navigate = useNavigate();

    const handleLogoutUser = () => {
        // Add logic to handle logout
    };

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
                        <button className='nav-btn' onClick={handleLogoutUser}>
                            Log Out
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink className='nav-btn' to='/login'>
                            Login
                        </NavLink>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;
