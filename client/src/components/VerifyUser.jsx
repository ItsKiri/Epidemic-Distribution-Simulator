import React, { useEffect } from "react";
import { useAuthToken } from "../AuthTokenContext";
import { useNavigate } from "react-router-dom";
import "../style/appLayout.css";

export default function VerifyUser() {
  const navigate = useNavigate();
  const { accessToken } = useAuthToken();


  const REACT_APP_API_URL="https://assignment3-360310.wn.r.appspot.com";

  const REACT_APP_AUTH0_DOMAIN="webassignment-3.us.auth0.com";
  const REACT_APP_AUTH0_CLIENT_ID="JDx82R6BgA5aCqwKnvz2Vy9SxOSw6nEq";
  const REACT_APP_AUTH0_AUDIENCE="https://api.todos";
  const REACT_APP_JWT_NAMESPACE="https://api.todos";

  useEffect(() => {
    async function verifyUser() {
      const data = await fetch(`${REACT_APP_API_URL}/verify-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const user = await data.json();

      if (user.auth0Id) {
        navigate("/app");
      }
    }

    if (accessToken) {
      verifyUser();
    }
  }, [accessToken, navigate]);

  return <div className="loading">Loading...</div>;
}
