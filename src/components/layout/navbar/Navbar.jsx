import "./Navbar.css";
import logo from "../../assets/kinishop_logo.png";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import { NavLink, Outlet, Link } from "react-router-dom";

import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ReorderIcon from "@mui/icons-material/Reorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SentimentSatisfiedAltOutlinedIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import { Badge, AppBar, Box, IconButton, Button, Avatar } from "@mui/material";
import { PersonOutline, SearchOutlined } from "@mui/icons-material";

export const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  return (
    <>
      <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-start bg-black ">
        <ul className="flex items-center gap-3">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <Avatar src={logo} alt="logo kinishop" />
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Productos
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/category/moda"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Moda
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              to="/category/juguetes"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Juguetes
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink
              to="/category/snacks"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Snacks
            </NavLink>
          </li>
        </ul>
        <ul className="flex items-center gap-3">
          <li className="navbar-item">
            <NavLink to="/ordenes">
              <Badge>
                <ReorderIcon />
              </Badge>
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink to="/carrito">
              <Badge>
                <CartWidget />
              </Badge>
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink to="/micuenta">
              <Badge>
                <SentimentSatisfiedAltOutlinedIcon />
              </Badge>
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
  //navbar
};
