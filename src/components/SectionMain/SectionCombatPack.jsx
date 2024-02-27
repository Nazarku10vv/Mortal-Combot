import { Box, Typography } from "@mui/material";
import React from "react";

const SectionCombatPack = () => {
    return (
        <Box className="SectionCombatPack">
            <Box>
                <Box className="SectionCombatPackText">
                    <Typography variant="h5" color="initial">
                        JUSTICE. THEIR WAY.
                    </Typography>
                    <Typography variant="h3" color="initial">
                        KOMBAT PACK
                    </Typography>{" "}
                    <br />
                    <Typography variant="h6" color="initial">
                        Introducing your roster for the Mortal Kombat 1 Kombat
                        Pack fighters.
                    </Typography>{" "}
                    <Typography variant="h6" color="initial">
                        TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER •
                        OMNI-MAN
                    </Typography>
                    <br />
                    <Box className="SectionCombatVideo">
                        <video
                            poster="https://cdn-mk1.mortalkombat.com/media/kombat-pack.jpg"
                            class="img-fluid"
                            type="video/mp4"
                            src="https://cdn-mk1.mortalkombat.com/media/kombat-pack.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                        ></video>
                    </Box>
                </Box>
            </Box>
            <video
                className="video3"
                src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
        </Box>
    );
};

export default SectionCombatPack;
