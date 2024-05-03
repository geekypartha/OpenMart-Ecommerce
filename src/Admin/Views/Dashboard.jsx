import React from 'react'

import Grid from "@mui/material/Grid";

import "./Admin.css";
import Achievement from './Dashboard table/Achievement';
import MonthlyOverview from './Dashboard table/MonthlyOverview';
import WeeklyOverview from './Dashboard table/WeeklyOverview';
import TotalEarning from './Dashboard table/TotalEarning';
import CardStatsVertical from "../../customer/Styles/CardStatsVertical";
import {
  BriefcaseVariantOutline,
  CurrencyUsd,
  HelpCircleOutline,
  Poll,
} from "mdi-material-ui";
import CustomersTable from './Dashboard table/CustomersTable';
import RecentOrders from './Dashboard table/RecentOrders';
import RecentlyAddeddProducts from './Dashboard table/RecentlyAddeddProducts';
import SalesOverTime from './Dashboard table/SalesOverTime';



const Dashboard = () => {
  return (
    <>
      <div className="px-10 adminContainer">
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Achievement />
          </Grid>

          <Grid item xs={12} md={8}>
            <MonthlyOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <WeeklyOverview />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <TotalEarning />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <CardStatsVertical
                  stats="$25.6k"
                  icon={<Poll />}
                  color="success"
                  trendNumber="+42%"
                  title="Total Profit"
                  subtitle="Weekly Profit"
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatsVertical
                  stats="$78"
                  title="Refunds"
                  trend="negative"
                  color="secondary"
                  trendNumber="-15%"
                  subtitle="Past Month"
                  icon={<CurrencyUsd />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatsVertical
                  stats="862"
                  trend="negative"
                  trendNumber="-18%"
                  title="New Orders"
                  subtitle="Weekly Orders"
                  icon={<BriefcaseVariantOutline />}
                />
              </Grid>
              <Grid item xs={6}>
                <CardStatsVertical
                  stats="15"
                  color="warning"
                  trend="negative"
                  trendNumber="-18%"
                  subtitle="Last Week"
                  title="Sales Queries"
                  icon={<HelpCircleOutline />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CustomersTable />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <RecentOrders />
          </Grid>
          <Grid item xs={12} md={12} lg={8}>
            <RecentlyAddeddProducts />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <SalesOverTime />
          </Grid>

          <Grid item xs={12}>
            <CustomersTable />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Dashboard
