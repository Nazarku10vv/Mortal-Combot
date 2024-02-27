import { Box, Typography } from "@mui/material";
import React from "react";

const SectionMainFooter = () => {
    return (
        <Box
            sx={{
                background: "#0e1a2d",
            }}
        >
            <Box>
                <video
                    style={{ width: "1905px" }}
                    class="d-none d-lg-block fire fire-down"
                    src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
                <Box>
                    <Box className="sectionMainFooterText">
                        <Box>
                            <Typography
                                sx={{ color: "white", fontSize: "12px" }}
                                variant="p"
                            >
                                MORTAL KOMBAT 1 Software © 2023 Warner Bros.
                                Entertainment Inc. Developed by NetherRealm
                                Studios. Unreal® Engine, copyright 1998-2023
                                Epic Games, Inc. Unreal, Unreal Technology and
                                <br />
                                the Powered by Unreal Technology logo are
                                trademarks or registered trademarks of Epic
                                Games, Inc. Uses Oodle Data Compression
                                Copyright and Bink Video (C) 1997-2023 by RAD{" "}
                                <br />
                                Game Tools, Inc. NETHERREALM STUDIOS LOGO,
                                MORTAL KOMBAT, THE DRAGON LOGO, and all related
                                characters and elements are trademarks of and ©
                                2023 Warner Bros. Entertainment Inc.
                            </Typography>
                            <p
                                style={{
                                    display: "flex",
                                    alignContent: "center",
                                    alignItems: "center",
                                    gap: "5px",
                                    color: "white",
                                    margin: "20px 0 ",
                                    fontSize: "13px",
                                }}
                            >
                                <img
                                    style={{
                                        background: "none",
                                        width: "40px",
                                    }}
                                    src="https://logowik.com/content/uploads/images/warner-bros.jpg"
                                    alt=""
                                />
                                WARNER BROS. GAMES LOGO, WARNER BROS.
                                INTERACTIVE LOGO, WB SHIELD: ™ & © Warner Bros.
                                Entertainment Inc. (s23)
                            </p>
                        </Box>
                        <img
                            style={{ width: "200px" }}
                            src="https://cdn-mk1.mortalkombat.com/ratings/esrb/esrb.svg"
                            alt=""
                        />
                    </Box>
                    <Box className=" a">
                        <Typography sx={{ color: "white" }} variant="h6">
                            PRIVACY POLICY
                        </Typography>
                        <Typography sx={{ color: "white" }} variant="h6">
                            {" "}
                            AD CHOICES
                        </Typography>
                        <Typography sx={{ color: "white" }} variant="h6">
                            {" "}
                            TERMS OF USE
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SectionMainFooter;
