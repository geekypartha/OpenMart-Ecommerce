import { Grid } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Drawer from "@mui/material/Drawer";
import { getOrderHistory } from "../../../State/Order/Action";

const orderStatus = [
  { lable: "On the Way", value: "on_the_way" },
  { lable: "Delivered", value: "delivered" },
  { lable: "Cancelled", value: "cancelled" },
  { lable: "Returned", value: "returned" },
];



const Order = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { order } = useSelector((store) => store);

  const toggleDrawer = (newOpen)=> {
    setOpen(newOpen);
  };

  useEffect(() => {
    dispatch(getOrderHistory({ jwt }));
  }, [jwt]);


console.log("users orders ",order.orders)
  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={() => toggleDrawer(false)}
    >
      <div className="h-auto  bg-white p-5 sticky top-5">
        <h1 className="font-bold text-lg font-jost-medium">Filters</h1>
        <div className="space-y-4 mt-10">
          <h1 className="font-semibold font-jost-medium">Order Status</h1>
          {orderStatus.map((option) => (
            <div className="flex items-center">
              <input
                defaultValue={option.value}
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-black"
              />
              <label
                className="ml-3 text-sm font-jost-light text-gray-600"
                htmlFor={option.value}
              >
                {option.lable}
              </label>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
 
  return (
    <>
      <div className="lg:px-48 pt-24 px-5">
        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          {/* For mobile view */}

          <div className="md:hidden flex pt-5 font-jost-medium color-black">
            <button className="flex py-5" onClick={() => toggleDrawer(true)}>
              <h1>Filters</h1>
              <FilterAltIcon />
            </button>
            <Drawer open={open} onClose={() => toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
          </div>
          <Grid item md={2} className="hidden md:block">
            <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
              <h1 className="font-bold text-lg font-jost-medium">Filters</h1>
              <div className="space-y-4 mt-10">
                <h1 className="font-semibold font-jost-medium">Order Status</h1>
                {orderStatus.map((option) => (
                  <div key={option.value} className="flex items-center">
                    <input
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-gray-900 focus:ring-black"
                    />
                    <label
                      className="ml-3 font-jost-light text-sm text-gray-600"
                      //htmlFor={option.value}
                    >
                      {option.lable}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
          <Grid className="" item md={9} xs={12}>
            <div className="space-y-5">
              {order.orders?.length > 0 &&
                order.orders?.map((order) => {
                  return order?.orderItems?.map((item, index) => (
                    <OrderCard item={item} order={order} />
                  ));
                })}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Order;
