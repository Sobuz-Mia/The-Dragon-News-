"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "@/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Stack } from "@mui/material";
// icons
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
const navItems = [
  {
    route: "Home",
    pathName: "/",
  },
  {
    route: "Pages",
    pathName: "/pages",
  },
  {
    route: "Category",
    pathName: "/category",
  },
  {
    route: "News",
    pathName: "/news",
  },
  {
    route: "Post",
    pathName: "/post",
  },
  {
    route: "Contact",
    pathName: "/contact",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ bgcolor: "#151515" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt="logo" height={100} width={100} />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((item) => (
                <Link key={item} href={item.pathName}>
                    <Button>
                        {item.route}
                    </Button>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box className="w-full text-center">
             {navItems.map((item) => (
                <Link key={item} href={item.pathName}>
                    <Button className="text-white">
                        {item.route}
                    </Button>
                </Link>
              ))}
          </Box>

          <Box >
            <Stack direction="row">
            <FacebookIcon style={{ marginRight: "5px" }} />
            <TwitterIcon style={{ marginRight: "5px" }} />
            <YouTubeIcon style={{ marginRight: "5px" }} />
            <LinkedInIcon style={{ marginRight: "5px" }} />
            <InstagramIcon />
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
