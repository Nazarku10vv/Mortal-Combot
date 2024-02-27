import { Box, Avatar, Typography } from "@mui/material";
import React from "react";

const SectionBlood = () => {
    return (
        <Box sx={{ background: "black", marginTop: "-1pc" }}>
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            textAlign: "center",
                            m: 0,
                            p: 0,
                        }}
                    >
                        <Avatar
                            src="https://cdn-mk1.mortalkombat.com/home/sigil.webp"
                            alt=""
                            sx={{ width: "300px", height: "300px" }}
                        />
                        <Typography
                            sx={{ color: "#fff" }}
                            variant="h3"
                            color="initial"
                        >
                            IT’S IN OUR BLOOD
                        </Typography>
                        <Typography
                            sx={{ color: "#fff" }}
                            variant="h6"
                            color="initial"
                        >
                            Discover a reborn Mortal Kombat Universe created by
                            the Fire God Liu Kang
                        </Typography>{" "}
                        <br />
                        <Typography
                            sx={{ color: "#fff" }}
                            variant="h6"
                            color="initial"
                        >
                            Mortal Kombat 1 ushers in a new era of the iconic
                            franchise with a new fighting <br /> system, game
                            modes, and fatalities!
                        </Typography>
                    </Box>
                    <Avatar
                        src="https://cdn-mk1.mortalkombat.com/home/liu-kang-wfire.webp"
                        alt=""
                        sx={{
                            width: "500px",
                            height: "700px",
                            position: "relative",
                            zIndex: "1",
                        }}
                    />
                </Box>
                <video
                    style={{
                        width: "1905px",
                        position: "relative",
                        zIndex: "2",
                    }}
                    className="video"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source
                        src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
                        type="video/webm"
                    />
                </video>
            </Box>
        </Box>
    );
};

export default SectionBlood;
