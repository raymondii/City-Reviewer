import React, {
  createContext,
  useContext,
  useReducer,
  useState,
  useEffect,
} from 'react';
import { useQuery } from '@apollo/client';
import { AUTHENTICATE } from '../graphql/queries';

// Create the context for your store
const Context = createContext();

export function StoreProvider({ children }) {
  const { data: userData } = useQuery(AUTHENTICATE);
  const [state, setState] = useState({
    user: null,
    loading: true,
  });

  useEffect(() => {
    if (userData) {
      setState({
        ...state,
        user: userData.authenticate,
        loading: false,
      });
    }
  }, [userData]);

  return (
    <Context.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
}

// Create a custom hook to use the store
export const useStore = () => useContext(Context);
