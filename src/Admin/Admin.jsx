import * as React from "react";
import { Box, Avatar } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";

//import AdminNavbar from "./Navigation/AdminNavbar";
// import Dashboard from "./Views/Admin";
import { Route, Routes, useNavigate } from "react-router-dom";
// import DemoAdmin from "./Views/DemoAdmin";
// import CreateProductForm from "./componets/createProduct/CreateProductFrom";
// import CreateProuductDemo from "./componets/createProduct/CreateProuductDemo";
// import CreateProduct from "../customer/Components/Create/CreateProduct";
// import "./AdminPannel.css";
// import ProductsTable from "./componets/Products/ProductsTable";
// import OrdersTable from "./componets/Orders/OrdersTable";
// import Customers from "./componets/customers/customers";
//import UpdateProductForm from "./componets/updateProduct/UpdateProduct";
import { useDispatch, useSelector } from "react-redux";
//import { getUser, logout } from "../Redux/Auth/Action";
import { useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { customTheme } from "./theme/customeTheme";
import { Dashboard } from "@mui/icons-material";
import CreateProductForm from "./components/CreateProductForm";
import ProductsTable from "./components/ProductsTable";
import OrdersTable from "./components/OrdersTable";
 
import CustomersTable from "./components/CustomersTable";
import DashboardMain from "./Views/Dashboard";
import AdminNavbar from "./components/AdminNavbar";
import { getUser, logout } from "../State/Auth/Action";


const drawerWidth = 240;

const menu = [
  { name: "Dashboard", path: "/admin", icon: <Dashboard /> },
  { name: "Products", path: "/admin/products", icon: <Dashboard /> },
  { name: "Customers", path: "/admin/customers", icon: <Dashboard /> },
  { name: "Orders", path: "/admin/orders", icon: <Dashboard /> },
  { name: "Total Earnings", path: "/admin", icon: <Dashboard /> },
  { name: "Weekly Overview", path: "/admin", icon: <Dashboard /> },
  { name: "Monthly Overview", path: "/admin", icon: <Dashboard /> },
  { name: "Add Product", path: "/admin/product/create", icon: <Dashboard /> },
];

export default function Admin() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem
            key={item.name}
            disablePadding
            onClick={() => navigate(item.path)}
          >
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <Avatar
              className="text-white"
              onClick={handleLogout}
              sx={{
                bgcolor: deepPurple[500],
                color: "white",
                cursor: "pointer",
              }}
            >
              {auth.user?.firstName[0].toUpperCase()}
            </Avatar>

            <ListItemText className="ml-5" primary={"Logout"} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />
        {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>

        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<DashboardMain />}></Route>
            <Route
              path="/product/create"
              element={<CreateProductForm />}
            ></Route>
            <Route path="/products" element={<ProductsTable />}></Route>
            <Route path="/orders" element={<OrdersTable />}></Route>
            <Route path="/customers" element={<CustomersTable />}></Route>
          </Routes>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
