import React, { useContext, useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const AuthTokenContext = React.createContext();

function AuthTokenProvider({ children }) {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const token = await getAccessTokenSilently();
        setAccessToken(token);
      } catch (err) {
        console.log(err);
      }
    };

    if (isAuthenticated) {
      getAccessToken();
    }
  }, [getAccessTokenSilently, isAuthenticated]);

  const value = { accessToken, setAccessToken };
  return (
    <AuthTokenContext.Provider value={value}>
      {children}
    </AuthTokenContext.Provider>
  );
}

const useAuthToken = () => useContext(AuthTokenContext);

export { useAuthToken, AuthTokenProvider };
