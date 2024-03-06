// import { useEffect } from 'react';
// import { useQuery } from '@apollo/client';
// import { useNavigate, useLocation } from 'react-router-dom';

// import { AUTHENTICATE } from '../graphql/queries';

// function Protect({ children }) {
//   const { data: userData } = useQuery(AUTHENTICATE);
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     if (userData) {
//       const user = userData.authenticate;

//       if (user && location.pathname === '/auth') {
//         console.log(user, 'logged in');
//         return navigate('/myreviews');
//       }

//       if (!user && location.pathname.match(/[myreviews|write]/gi)) {
//         console.log('logged out');
//         return navigate('/auth');
//       }
//     }
//   }, [userData]);

//   return <>{children}</>;
// }

// export default Protect;

import React, { useEffect } from 'react';
import { useStore } from '../store';
import { useNavigate, useLocation } from 'react-router-dom';

function Protect({ children }) {
  const { state } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if the user is authenticated
    const isAuthenticated = state.user !== null;

    if (!isAuthenticated && location.pathname !== '/auth') {
      // If the user is not authenticated and the current location is not the authentication page
      // redirect to the authentication page
      console.log(isAuthenticated);
      navigate('/auth');
    } else if (isAuthenticated && location.pathname === '/auth') {
      // If the user is authenticated and the current location is the authentication page
      // redirect to the dashboard page
      console.log(isAuthenticated);
      navigate('/dashboard');
    }
  }, [state.user, location.pathname, navigate]);

  return <>{children}</>;
}

export default Protect;
