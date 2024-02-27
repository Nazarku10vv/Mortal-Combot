import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import LanguageIcon from "@mui/icons-material/Language";
import { Box, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { useMortalAuthProduct } from "../../context/AuthContext";

const Header = () => {
  const navigate = useNavigate();
  const { user, logOutMortalProduct } = useMortalAuthProduct();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }
  function handleLogOut() {
    logOutMortalProduct();
  }

  return (
    <Box id="header">
      <Box className="container">
        <Box className="header">
          <Box className="header-left">
            <Avatar
              sx={{ width: "33px", height: "33px" }}
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Warner_Bros_logo.svg/1965px-Warner_Bros_logo.svg.png"
            />
            <Typography variant="h6">
              <LanguageIcon /> UNITED STATES - ENGLISH
            </Typography>
            <Typography variant="h6">MK 30TH ANNIVERSARY</Typography>
            <Link to="/the_shop">
              <Typography variant="h6">SHOP MERCH</Typography>
            </Link>
          </Box>
          <Box className="header-rigth">
            <Typography variant="h6">REPORT A BUG</Typography>
            <Typography variant="h6">SUPPORT</Typography>
            <Typography variant="h6">PATCH NOTES</Typography>
            <Typography className="headerMainIcon1" variant="h6">
              <YouTubeIcon />
            </Typography>
            <Typography className="headerMainIcon2" variant="h6">
              <InstagramIcon />
            </Typography>
            <Typography className="headerMainIcon3" variant="h6">
              <TwitterIcon />
            </Typography>
            <Typography className="headerMainIcon4" variant="h6">
              <WhatsAppIcon />
            </Typography>
            <Typography className="headerMainIcon5" variant="h6">
              <LocalPhoneIcon />
            </Typography>
            <Typography className="headerMainIcon6" variant="h6">
              <TelegramIcon />
            </Typography>
            <div>
              {user ? (
                <>
                  <Tooltip title={user.displayName}>
                    <img
                      onClick={handleMenu}
                      style={{
                        width: "30px",
                        height: "30px",
                        marginTop: "5px",
                        background: "red",
                        borderRadius: "50%",
                      }}
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  </Tooltip>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "14px",
                        p: "1px",
                      }}
                    >
                      <MenuItem onClick={handleLogOut}>log Out</MenuItem>
                    </Box>
                  </Menu>
                </>
              ) : (
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <Typography
                      onClick={() => navigate("/sign_up")}
                      variant="h6"
                    >
                      SIGN UP
                    </Typography>
                    <Typography
                      onClick={() => navigate("/sign_in")}
                      variant="h6"
                    >
                      SIGN IN
                    </Typography>
                  </Box>
                </>
              )}
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
