import { Box, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import ThreeKIcon from "@mui/icons-material/ThreeK";
import { Link } from "react-router-dom";
const BoyNowHeader = () => {
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
                        <img
                            src="https://cdn-mk1.mortalkombat.com/static/logo-blue.svg"
                            alt="ff"
                        />
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
            <Box>
                <Box className="BoyNowIcon">
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            color: "#0e4472",
                            fontWeight: "900",
                            fontSize: "19px",
                        }}
                    >
                        <LooksOneIcon />
                        EDITON
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            color: "rgb(134, 94, 19)",
                            fontWeight: "900",
                            fontSize: "19px",
                        }}
                    >
                        <LooksTwoIcon />
                        PLATFORM
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            color: " rgb(109, 109, 10)",
                            fontWeight: "900",
                            fontSize: "19px",
                        }}
                    >
                        <ThreeKIcon />
                        STORE
                    </Typography>
                </Box>
                <Box>
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#0e4472",
                            fontWeight: "900",
                            textAlign: "center",
                            padding: "50px 0 ",
                        }}
                    >
                        CHOOSE YOUR EDITION
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default BoyNowHeader;
