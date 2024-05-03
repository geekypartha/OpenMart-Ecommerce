import {Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReviewCard = () => {
  return (
    <div className='border-t  pt-2'>
        <Grid container  gap={4}>
            <Grid item xs={1}>
                <Box>
                    <Avatar className="text-white" sx={{width:56, height:56, bgcolor:"#9155fd"}}>P</Avatar>  
                </Box>
            </Grid>

            <Grid item xs={9}>
                <div className='space-y-2'>
                    <div>
                        <p className='font-jost-medium text-lg'>Partha</p>
                        <p className='opacity-70 font-jost-light'>April 24, 2023</p>
                    </div>
                </div>
                <Rating value={4.5} name='halfrating' readOnly precision={0.5}/>
                <p className='font-jost-light '>Awesome quality, I love it</p>
                
            </Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard