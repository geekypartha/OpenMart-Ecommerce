import { styled } from "@mui/material/styles";
import {
  
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  tableCellClasses,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    
  },
}));

const CartItem = ({item}) => {

  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleUpdateCartItem=(num)=>{
    const data = {data:{quantity:item.quantity+num},cartItemId:item?._id};
    console.log("update data", data);
    dispatch(updateCartItem(data));
  }
  const handleRemoveCartItem=()=>{
   const data = { cartItemId: item?._id, jwt };
   console.log("id", data);
   dispatch(removeCartItem(data));
  }
  
  return (
    <>
      <div className="lg:px-0">
        {/* For large screen view */}
        <div className=" hidden md:block">
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead className="font-jost-medium">
                <TableRow className="">
                  <StyledTableCell className="w-[44rem] font-jost-medium"></StyledTableCell>
                  <StyledTableCell className="w-[36rem] font-jost-medium"></StyledTableCell>
                  <StyledTableCell className="font-jost-medium"></StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <StyledTableCell>
                    <div className="flex items-center">
                      <div className="w-[5rem] h-[7rem] lg:w-[9rem] lg:h-[12rem]">
                        <img
                          className="h-full w-full object-cover object-top"
                          src={item.product?.imageUrl}
                          alt=""
                        />
                      </div>
                      <div className="ml-5 space-y-2">
                        <p className="font-semibold text-sm lg:text-md  font-jost-medium">
                          {item.product.title}
                        </p>
                        <p className="text-sm opacity-70 font-jost-medium">
                          Size: {item.size},{item.product.color}
                        </p>
                        <p className="text-sm opacity-70 font-jost-medium">
                          Seller:{item.product.brand}
                        </p>
                        <div className="flex space-x-3 items-center text-lg lg:text-xl text-gray-900 lg:pt-7">
                          <p className="font-seoge-ui line-through text-gray-700">
                            ₹{item.product.price}
                          </p>
                          <p className="font-semibold text-md font-seoge-ui text-red-600">
                            ₹{item.product.discountedPrice}
                          </p>
                          <p className="font-seoge-ui font-semibold text-gray-600">
                            {item.product.discountPersent}% off
                          </p>
                        </div>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center rounded-md bg-zinc-100">
                        <IconButton
                          onClick={() => handleUpdateCartItem(-1)}
                          disabled={item?.quantity <= 1}
                        >
                          <RemoveIcon />
                        </IconButton>
                        <span className="py-1 px-3">{item?.quantity}</span>
                        <IconButton onClick={() => handleUpdateCartItem(1)}>
                          <AddIcon />
                        </IconButton>
                      </div>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>
                    <div>
                      <p className="font-semibold text-md font-seoge-ui">
                        ₹{item.discountedPrice}
                      </p>
                    </div>
                  </StyledTableCell>
                  <StyledTableCell>
                    <div>
                      <IconButton onClick={handleRemoveCartItem}>
                        <DeleteOutlineIcon />
                      </IconButton>
                    </div>
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        {/* for mobile screen */}
        <div className="grid grid-cols-1 p-5 gap4 md:hidden">
          {/* product */}
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="w-[5rem] h-[7rem] lg:w-[9rem] lg:h-[12rem]">
                <img
                  className="h-full w-full object-cover object-top"
                  src={item.product.imageUrl}
                  alt=""
                />
              </div>
              <div className="ml-5 space-y-2">
                <p className="font-semibold text-sm lg:text-md  font-jost-light">
                  {item.product.title}
                </p>
                <p className="opacity-70 font-jost-light">
                  Size: {item.size},{item.product.color}
                </p>
                <p className="opacity-70 text-sm font-jost-light">
                  Seller:{item.product.brand}
                </p>
                <div className="flex space-x-3 items-center text-lg lg:text-xl text-gray-900 lg:pt-7">
                  <p className="font-seoge-ui line-through text-gray-500">
                    ₹{item.product.price}
                  </p>
                  <p className="font-semibold text-md font-seoge-ui text-red-600">
                    ₹{item.product?.discountedPrice}
                  </p>
                  <p className="font-seoge-ui font-semibold text-gray-600">
                    {item.product?.discountPersent}% off
                  </p>
                </div>
              </div>
            </div>
            {/* remove item */}
            <div>
              <IconButton onClick={handleRemoveCartItem} className="w-1 h-1">
                <CloseIcon />
              </IconButton>
            </div>
          </div>

          <div className="pt-5 flex justify-between items-center">
            {/* quantity */}
            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md bg-zinc-100">
                <IconButton
                  onClick={() => handleUpdateCartItem(-1)}
                  disabled={item?.quantity <= 1}
                >
                  <RemoveIcon />
                </IconButton>
                <span className="py-1 px-3">{item?.quantity}</span>
                <IconButton onClick={() => handleUpdateCartItem(1)}>
                  <AddIcon />
                </IconButton>
              </div>
            </div>
            {/* subtotal */}
            <div>
              <span className="font-semibold text-md font-seoge-ui">
                ₹{item.discountedPrice}
              </span>
            </div>
          </div>
        </div>
        {/* clear cart */}
        <div></div>
      </div>
    </>
  );
};

export default CartItem;
