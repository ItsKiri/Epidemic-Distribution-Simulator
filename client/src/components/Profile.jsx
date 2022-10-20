import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Profile() {
  const { user } = useAuth0();

  return (
    <div>
      <Card sx={{ display: "flex", maxWidth: 560 }}>
        <CardContent>
          <Typography component="h2" variant="h5">
             Researcher: {user.name}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            📧 Email: {user.email}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{
            width: 160,
            aspectRatio: 1,
            display: { xs: "none", sm: "block" },
          }}
          image={user.picture}
        />
      </Card>
      <div></div>
    </div>
  );
}
