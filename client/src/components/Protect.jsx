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

// SECOND V
// import { useEffect, useState } from 'react';
// import { useStore } from '../store';
// import { useNavigate, useLocation } from 'react-router-dom';

// function Protect({ children }) {
//   const { state } = useStore();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (state.user && location.pathname === '/auth') {
//       navigate('/dashboard');
//     }

//     if (
//       !state.user &&
//       (location.pathname === '/myreviews' ||
//         location.pathname === '/writeareview')
//     ) {
//       navigate('/auth');
//     }

//     setLoading(false); // Set loading to false after checking authentication
//   }, [state.user, location.pathname, navigate]);

//   // Render children only when loading is false
//   return loading ? null : <>{children}</>;
// }

// export default Protect;

import { useEffect } from 'react';
import { useStore } from '../store';
import { useNavigate, useLocation } from 'react-router-dom';

function Protect({ children }) {
  const { state } = useStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!state.user && location.pathname !== '/auth') {
      navigate('/auth');
    }
  }, [state.user, location.pathname, navigate]);

  return <>{children}</>;
}

export default Protect;
