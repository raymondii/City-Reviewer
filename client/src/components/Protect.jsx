import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useNavigate, useLocation } from 'react-router-dom';

import { AUTHENTICATE } from '../graphql/queries';

function Protect({ children }) {
  const { data: userData } = useQuery(AUTHENTICATE);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (userData) {
      const user = userData.authenticate;

      if (user && location.pathname === '/auth') {
        console.log(user, 'logged in');
        return navigate('/myreviews');
      }

      if (!user && location.pathname.match(/[myreviews|write]/gi)) {
        console.log('logged out');
        return navigate('/auth');
      }
    }
  }, [userData]);

  return <>{children}</>;
}

export default Protect;
