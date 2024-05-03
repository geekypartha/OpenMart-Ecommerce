import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Cart from "../components/Cart/Cart";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/footer";
import Product from "../components/Product/Product";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Checkout from "../components/Checkout/Checkout";
import OrderDetails from "../components/Order/OrderDetails";
import Order from "../components/Order/Order";
import PaymentSuccess from "../components/Payment/PaymentSuccess";
import ScrollToTop from "../components/ScrollToTop";
const CustomerRouters = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <ScrollToTop />
      <Routes>
        
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/login" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:lavelOne/:lavelTwo/:lavelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        <Route path="payment/:orderId" element={<PaymentSuccess />}></Route>

        {/* <HomePage /> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        {/* <OrderDetails /> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
