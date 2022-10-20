import React from "react";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import "../style/appLayout.css";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    background: {
      default: "#909090"
    }
  }
});

export default function AppLayout() {
  const { user, isLoading, logout } = useAuth0();

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { backgroundColor: "black" }
        }}
      />
  
    
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: "wrap" }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            Plague Inc.
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="/app"
              sx={{ my: 1, mx: 1.5 }}
            >
              *Profile*
            </Link>

            <Link
              variant="button"
              color="text.primary"
              href="/app/introduction"
              sx={{ my: 1, mx: 1.5 }}
            >
              *Game Introduction*
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/app/game"
              sx={{ my: 1, mx: 1.5 }}
            >
              *Game*
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="/app/weather"
              sx={{ my: 1, mx: 1.5 }}
            >
              *Weather*
            </Link>
          </nav>
          <Button
            onClick={() => logout({ returnTo: window.location.origin })}
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
          >
            LogOut
          </Button>
        </Toolbar>
      </AppBar>

      <Typography>Hello 👋 {user.name} </Typography>
      <div className="content">
        <Outlet />
      </div>
      </ThemeProvider>
    </React.Fragment>
  );
}
