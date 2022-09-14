import { useState, useEffect } from "react";
import { useAuthToken } from "../AuthTokenContext";

export default function useTodos() {
  const [todosItems, setTodosItems] = useState([]);
  const { accessToken } = useAuthToken();

  const REACT_APP_API_URL="https://assignment3-360310.wn.r.appspot.com";

  // const REACT_APP_AUTH0_DOMAIN="webassignment-3.us.auth0.com";
  // const REACT_APP_AUTH0_CLIENT_ID="JDx82R6BgA5aCqwKnvz2Vy9SxOSw6nEq";
  // const REACT_APP_AUTH0_AUDIENCE="https://api.todos";
  // const REACT_APP_JWT_NAMESPACE="https://api.todos";

  useEffect(() => {
    async function getTodosFromApi() {
      const data = await fetch(`${REACT_APP_API_URL}/todos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const todos = await data.json();

      setTodosItems(todos);
    }

    if (accessToken) {
      getTodosFromApi();
    }
  }, [accessToken]);

  return [todosItems, setTodosItems];
}
