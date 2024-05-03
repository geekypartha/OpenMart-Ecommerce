import { Grid3x3, TrendingUp } from '@mui/icons-material'
import React from 'react'
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";


//icon imports

import CurrencyUsd from "mdi-material-ui/CurrencyUsd";
import DotsVertical from "mdi-material-ui/DotsVertical";
import CellphoneLink from "mdi-material-ui/CellphoneLink";
import AccountOutline from "mdi-material-ui/AccountOutline";

const salesData=[
    {
        stats: "230K",
        title: "Sales",
        color: "primary",
        icon: <TrendingUp sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: "15K",
        title: "Customers",
        color: "success",
        icon: <AccountOutline sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: "2.3K",
        title: "Products",
        color: "warning",
        icon: <CellphoneLink sx={{fontSize:"1.75rem"}}/>
    },
    {
        stats: "$72K",
        title: "Revenue",
        color: "info",
        icon: <CurrencyUsd sx={{fontSize:"1.75rem"}}/>
    },
]

const renderStats=()=>{
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={3} key={index}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Avatar
            variant="rounded"
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: "common.white",
              backgroundColor: `${item.color}.main`,
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="caption">{item.title}</Typography>
            <Typography variant="h6">{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ));
}


const MonthlyOverview = () => {
  return (
    <Card>
      <CardHeader
        title="Monthly Overview"
        action={
          <IconButton size="small">
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: "text.primary" }}
            >
              Total 43.2% growth
            </Box>{" "}
            this month
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: "2rem !important",
            letterSpacing: "0.15px !important",
          },
        }}
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
}

export default MonthlyOverview