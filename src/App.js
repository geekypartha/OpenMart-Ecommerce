import "./App.css";
import Footer from "./customer/components/Footer/footer";
import Navigation from "./customer/components/Navigation/Navigation.jsx";
import Product from "./customer/components/Product/Product.jsx";
import HomePage from "./customer/Pages/HomePage";
import { createTheme, ThemeProvider } from "@mui/material";
//import { createMuiTheme } from "@material-ui/core/styles";


function App() {

  const theme= createTheme({
    typography: {
      fontFamily: ["Jost", " sans-serif"].join(","),
    },
  });

  return (
    <div className="">
      <Navigation />
      <div>
        {/* <HomePage /> */}
        <Product/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
