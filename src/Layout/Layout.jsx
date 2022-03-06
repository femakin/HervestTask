import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const drawerWidth = 282;

export default function Layout({ children }) {
  const [loading, setloading] = useState(false);

  useEffect(() => {}, []);

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div className="sidebardiv">
          <Sidebar />
        </div>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        {children}
      </Box>
    </Box>
  );
}
