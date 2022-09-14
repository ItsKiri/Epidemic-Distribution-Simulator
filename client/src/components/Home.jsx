import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "../style/home.css";
import Button from "@mui/material/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme();
export default function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const signUp = () => loginWithRedirect({ screen_hint: "signup" });
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="home">
              <Typography variant="h1" color="textSecondary">
                Plague Inc.
              </Typography>
            </div>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <div>
              {!isAuthenticated ? (
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="secondary"
                  className="btn-primary"
                  onClick={loginWithRedirect}
                >
                  Login
                </Button>
              ) : (
                <Button
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  color="secondary"
                  className="btn-primary"
                  onClick={() => navigate("/app")}
                >
                  Enter App
                </Button>
              )}
            </div>
            <div>
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
                className="btn-secondary"
                onClick={signUp}
              >
                Create Account
              </Button>
            </div>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
