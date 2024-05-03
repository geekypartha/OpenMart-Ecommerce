import React, { useEffect } from 'react'
import AddressCard from '../AddressCard/AddressCard'

import { Button, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, tableCellClasses } from '@mui/material';
import { styled } from "@mui/material/styles";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import CloseIcon from "@mui/icons-material/Close";
import {useDispatch, useSelector} from "react-redux";
import { getOrderById } from '../../../State/Order/Action';
import { useLocation } from 'react-router-dom';
import CartItem from '../Cart/CartItem';
import { createPayment } from '../../../State/Payment/Action';

const OrderSummary = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const {order}= useSelector((store)=>store);



  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));

  useEffect(()=>{
    dispatch(getOrderById(orderId));
  },[orderId]);

  const handleCheckout = ()=>{
    dispatch(createPayment(orderId))
  }

  return (
    <div>
      <div className="p-5 shadow-lg border">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      {/* cartitem */}
      <div className="lg:px-0 ">
        <Grid container md={12}>
          <Grid className="pt-10" item lg={8} xs={12}>
            <div className="lg:px-0">
              <div className="hidden md:block">
                <TableContainer component={Paper}>
                  <Table aria-label="simple table">
                    <TableHead className="font-jost-medium">
                      <TableRow className="">
                        <StyledTableCell className="w-[44rem] font-jost-medium">
                          <span className="font-jost-medium">Product</span>
                        </StyledTableCell>
                        <StyledTableCell className="w-[36rem] font-jost-medium">
                          <span className="font-jost-medium">Quantity</span>
                        </StyledTableCell>
                        <StyledTableCell className="font-jost-medium">
                          <span className="font-jost-medium">Subtotal</span>
                        </StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody></TableBody>
                  </Table>
                </TableContainer>
              </div>
              {order.order?.orderItems.map((item) => (
                <CartItem item={item} />
              ))}
            </div>
          </Grid>

          <Grid item lg={4} xs={12}>
            <div className="lg:px-0 px-5 pb-24 pt-8 flex justify-center ">
              <div className="h-[12rem] w-[30rem]">
                <div>
                  <h1 className="flex justify-center md:text-2xl text-xl font-semibold font-jost-medium pb-10">
                    Order Summary
                  </h1>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jost-light text-gray-700">
                    Total Price
                  </span>
                  <span className=" text-md font-seoge-ui">
                    ₹{order.order?.totalPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jost-light text-gray-700">
                    Discount
                  </span>
                  <span className=" text-md font-seoge-ui">
                    -₹{order.order?.discounte}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jost-light text-gray-700">
                    Total Item
                  </span>
                  <span className=" text-md font-seoge-ui">
                    {order.order?.totalItem}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jost-light text-gray-700">
                    Subtotal
                  </span>
                  <span className=" text-md font-seoge-ui">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jost-light text-gray-700">
                    Delivery Charges
                  </span>
                  <span className=" text-md font-seoge-ui">Free</span>
                </div>
                <div className="pt-5 flex justify-between items-center">
                  <span className="font-jost-medium font-base">
                    ORDER TOTAL
                  </span>
                  <span className="font-semibold text-lg font-seoge-ui">
                    ₹{order.order?.totalDiscountedPrice}
                  </span>
                </div>
                {/*Proceed to checkout button */}
                <div className="py-7 flex justify-center">
                  <Button
                    onClick={handleCheckout}
                    variant="outlined"
                    sx={{
                      px: { sm: "50px" },
                      color: "white",
                      overflow: "hidden",
                      py: "8px",
                      fontFamily: "jost-light",
                      bgcolor: "black",
                      ":hover": {
                        bgcolor: "#fff",
                        color: "black",
                        boxShadow: "none",
                        border: "1px solid currentColor",
                      },
                    }}
                  >
                    <div className="flex items-center font-jost-medium gap-2 justify-center">
                      Payment
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

        {/* For large screen view */}

        {/* clear cart */}
      </div>
    </div>
  );
}

export default OrderSummary