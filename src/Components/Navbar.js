import React from "react";
import Logo from "./../assets/logo.svg";

import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  List,
  ListItemButton,
  ListItem,
  Divider,
  ListItemText,
  Drawer,
  IconButton,
  Container,
} from "@mui/material";
import { Toolbar } from "@mui/material";
// import useState from "react";
const drawerWidth = 240;

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/">Home</a>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <a href="/about/tt">About</a>
          </ListItemButton>
        </ListItem>{" "}
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>Contact Us</ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>Register</ListItemButton>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
  return (
    <div className="navbar">
      <div className="logo_box">
        <div className="logo_imgbox">
          <img src={Logo} className="logo_img" />
        </div>
        <div className="logo_text">Positive Table Tennis</div>
      </div>
      <div className="navBtn">
        <a href="/">
          <button className="navBtn_text">Home</button>
        </a>
        <a href="/about/tt">
          <button className="navBtn_text">About us</button>
        </a>
        <a href="">
          <button className="navBtn_text">Contact us</button>
        </a>
        <a href="">
          <button className="navBtn_text">Register</button>
        </a>
      </div>
      <div className="navBtn_phnview">
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>

          <Box
            component="nav"
            sx={{ width: { sm: drawerWidth } }}
            aria-label="mailbox folders"
          >
            <Drawer
              variant="temprary"
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: "block" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
        </Box>
      </div>
    </div>
  );
}
export default Nav;
