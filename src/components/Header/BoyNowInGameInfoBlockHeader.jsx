import { Box, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

const BoyNowInGameInfoBlockHeader = () => {
  return (
    <Box>
      <Box className="BoyNowBagr">
        <Box className="BoyNowDis">
          <Avatar
            sx={{
              background: "none",
              width: "500px",
              height: "80px",
            }}
          >
            <Link to={"/"} id="BoyNowImg">
              <img
                src="https://cdn-mk1.mortalkombat.com/static/logo-blue.svg"
                alt="ff"
              />
            </Link>
          </Avatar>
          <Box sx={{ display: "flex", gap: "30px" }}>
            <Link to="/game_info">
              <button className="BoyNowButton">
                <span className="BoyNowSpan">GAME INFO</span>
              </button>
            </Link>
            <button className="BoyNowButton">
              <span className="BoyNowSpan">ROSTER</span>
            </button>
            <button className="BoyNowButton">
              <span className="BoyNowSpan">#MKKOLLECTIVE</span>
            </button>
            <button className="BoyNowButton">
              <span className="BoyNowSpan">MEDIA</span>
            </button>
            <button className="BoyNowButton">
              <span className="BoyNowSpan">ESPORTS</span>
            </button>
            <button className="BoyNowButton">
              <span className="BoyNowSpan">FAQ</span>
            </button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoyNowInGameInfoBlockHeader;
