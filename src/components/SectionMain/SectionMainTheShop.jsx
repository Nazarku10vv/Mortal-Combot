import { Box, Avatar } from "@mui/material";
import React from "react";


const SectionMainTheShop = () => {
    return (
        <Box sx={{ background: "black" }}>
            <Box>
                <Box>
                    <Box
                    className="SectionMainTheShopBlock"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                        className="SectionMainTheShopBlockImg1"
                            style={{ margin: "5pc 0 0 0" }}
                            src="https://cdn-mk1.mortalkombat.com/home/sigil.webp"
                            alt=""
                        />
                        <img
                        className="SectionMainTheShopBlockImg2"
                            style={{ width: "300px" }}
                            src="https://cdn-mk1.mortalkombat.com/static/mk1-logo-tm.webp"
                            alt=""
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default SectionMainTheShop;
