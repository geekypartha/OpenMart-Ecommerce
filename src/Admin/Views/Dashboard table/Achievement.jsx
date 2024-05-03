import React from 'react'
import {
  ThemeProvider,
  createTheme,
  styled,
  useTheme,
} from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";



// Styled component for the triangle shaped background image
const TriangleImg = styled('img')({
  right: 0,
  bottom: 0,
  height: 170,
  position: 'absolute'
})

// Styled component for the trophy image
const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})





const Achievement = () => {
  return (
    <Card sx={{ position: "relative" }}>
      <CardContent>
        <Typography variant="h6" sx={{ letterSpacing: ".25px" }}>
          OpenMart
        </Typography>
        <Typography variant="body-2">Congratulations</Typography>
        <Typography variant="h5" sx={{ my: 2.8 }}>
          350k
        </Typography>

        <Button size="small" variant="contained">
          View Sales
        </Button>

        <TriangleImg
          alt="triangle background"
          src={"/image/triangle-dark.png"}
        />
        <TrophyImg alt="trophy" src="/image/trophy.png" />
      </CardContent>
    </Card>
  );
}

export default Achievement