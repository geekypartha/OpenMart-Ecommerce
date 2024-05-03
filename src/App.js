import "./App.css";
import Cart from "./customer/components/Cart/Cart.jsx";
import Checkout from "./customer/components/Checkout/Checkout.jsx";

import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Order from "./customer/components/Order/Order.jsx";
import OrderDetails from "./customer/components/Order/OrderDetails.jsx";
import Product from "./customer/components/Product/Product.jsx";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails.jsx";
import HomePage from "./customer/Pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";
import CustomerRouters from "./customer/Routers/CustomerRouters.jsx";
import { Route, Routes } from "react-router-dom";
import AdminRouters from "./customer/Routers/AdminRouters.jsx";
import ScrollToTop from "./customer/components/ScrollToTop.jsx";
//import { createMuiTheme } from "@material-ui/core/styles";


function App() {

  const theme= createTheme({
    typography: {
      fontFamily: ["Jost", " sans-serif"].join(","),
    },
  });

  return (
    <div className="">

      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        <Route path="/admin/*" element={<AdminRouters />}></Route>
      </Routes>

      <div></div>
    </div>
  );
}

export default App;
