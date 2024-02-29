import { Button } from '@mui/base'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-start px-10  font-jost-light"
        container
        sx={{ bgcolor: "#222222", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <div>
            <p className="pb-5 text-xl" >
              Categories
            </p>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Men's Shirt
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Men's Kurta
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Men's Shoes
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Women's Sharee
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Women's lehnga
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <p className="pb-5 text-xl" >
            Information
          </p>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              About Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Terms & Conditions
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Returns & Exchanges
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Shipping & Delivery
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Privacy Policy
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <p className="pb-5 text-xl" >
            Useful Links
          </p>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Blog
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Contact Us
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              My Account
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              Size Guide
            </Button>
          </div>
          <div>
            <Button className="pb-5" varient="h6" gutterBottom>
              FAQs
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <p className="pb-5 text-xl" >
            Newsletter Signup
          </p>
          <div>
            <Button className="pb-5 text-start" varient="h6" gutterBottom>
              subscribe to our newsletter for latest update
            </Button>
            <Button className="pb-5 text-start" varient="h6" gutterBottom>
              <MailOutlineIcon/> support@openmart.com
            </Button>
          </div>
        </Grid>
        <Grid className='pt-10'item xs={12}>
            <p align="center">
                &copy; 2024 Openmart. All rights reserved.
            </p>
            <p align="center">
                Made with love by geekypartha
            </p>

        </Grid>
      </Grid>
    </div>
  );
}

export default footer