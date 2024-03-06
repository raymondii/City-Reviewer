import React, { useState } from 'react';
import { useStore } from '../store';
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { REGISTER_USER, LOGIN_USER } from '../graphql/mutations';

function FormComponent({
  active,
  onRegisterClick,
  onLoginClick,
  handleInputChange,
  onSubmit,
}) {
  return (
    <div className={`container ${active ? 'active' : ''} flex mx-auto mt-20`}>
      <div className='form-container sign-up'>
        <form onSubmit={onSubmit}>
          <h1 className='font-bold text-xl'>Create Account</h1>
          <span>or use your email for registration</span>
          <input
            type='text'
            placeholder='Userame'
            name='username'
            onChange={handleInputChange}
          />
          <input
            onChange={handleInputChange}
            name='email'
            type='email'
            placeholder='Email'
          />
          <input
            onChange={handleInputChange}
            name='password'
            type='password'
            placeholder='Password'
          />
          <button>Sign Up</button>
        </form>
      </div>
      <div className='form-container sign-in'>
        <form onSubmit={onSubmit}>
          <h1 className='font-bold text-xl'>Sign In</h1>
          <span>or use your email password</span>
          <input
            name='email'
            onChange={handleInputChange}
            type='email'
            placeholder='Email'
          />
          <input
            name='password'
            onChange={handleInputChange}
            type='password'
            placeholder='Password'
          />
          {/* <a href='#'>Forget Your Password?</a> */}
          <button>Sign In</button>
        </form>
      </div>
      <div className='toggle-container'>
        <div className='toggle'>
          <div className='toggle-panel toggle-left'>
            <h1 className='font-bold text-xl'>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className='sign-in-btn' onClick={onLoginClick}>
              Sign In
            </button>
          </div>
          <div className='toggle-panel toggle-right'>
            <h1 className='font-bold text-xl'>Hi, There!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className='sign-up-btn' onClick={onRegisterClick}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function AuthForm() {
  const navigate = useNavigate();
  const { state, setState } = useStore();

  const [formData, setFormData] = useState({
    errorMessage: '',
    username: '',
    email: '',
    password: '',
    isLogin: true,
  });

  const [authenticateUser] = useMutation(
    formData.isLogin ? LOGIN_USER : REGISTER_USER,
    {
      variables: formData,
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const resolverName = formData.isLogin ? 'loginUser' : 'registerUser';

      const { data: userData } = await authenticateUser();

      setState({
        ...state,
        user: userData[resolverName],
      });

      setFormData({
        ...formData,
        username: '',
        email: '',
        password: '',
        errorMessage: '',
      });

      navigate('/');
    } catch (err) {
      setFormData({
        ...formData,
        errorMessage: err.message,
      });
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // ************************

  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => {
    setIsActive(true);
    setFormData({
      ...formData,
      isLogin: false,
    });
  };

  const handleLoginClick = () => {
    setIsActive(false);
    setFormData({
      ...formData,
      isLogin: true,
    });
  };

  return (
    <div className='app'>
      <FormComponent
        handleInputChange={handleInputChange}
        onSubmit={handleSubmit}
        active={isActive}
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}

export default AuthForm;
