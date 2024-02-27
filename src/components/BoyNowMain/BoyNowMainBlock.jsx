import React from "react";
import Header from "../Header/Header";
import TheShopFooter from "../Footer/TheShopFooter";
import BoyNowHeader from "../Header/BoyNowHeader";
import { Box, Button, Typography } from "@mui/material";

const BoyNowMainBlock = () => {
    return (
        <div id="BoyNowHeader">
            <Header />
            <Box></Box>
            <BoyNowHeader />
            <Box className="BuyNowBuy">
                <Box className="BoyNowBlock">
                    <Box className="BoyNowImage">
                        <img
                            src="https://cdn-mk1.mortalkombat.com/purchase/pack-standard.webp"
                            alt="oo"
                        />
                    </Box>
                    <Box>
                        <Box className="BuyNowButton">
                            <div data-tooltip="$69.99" class="button1">
                                <div class="button-wrapper">
                                    <div class="text">Buy Now</div>
                                    <span class="icon">
                                        <svg
                                            viewBox="0 0 16 16"
                                            class="bi bi-cart2"
                                            fill="currentColor"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{
                                color: "#06175f",
                                fontWeight: "900",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px 0",
                            }}
                        >
                            STANDARD EDITION
                        </Typography>
                        <Typography
                            sx={{
                                color: "#06175f",
                                fontWeight: "900",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            INCLUDES
                        </Typography>
                        <ul className="BuyNowText">
                            <li>Base Game</li>
                        </ul>
                    </Box>
                </Box>
                <Box className="BoyNowBlock">
                    <Box className="BoyNowImage">
                        <img
                            src="https://cdn-mk1.mortalkombat.com/purchase/pack-premium.webp"
                            alt="oo"
                        />
                    </Box>
                    <Box>
                        <Box className="BuyNowButton">
                            <div data-tooltip="$109.99" class="button1">
                                <div class="button-wrapper">
                                    <div class="text">Buy Now</div>
                                    <span class="icon">
                                        <svg
                                            viewBox="0 0 16 16"
                                            class="bi bi-cart2"
                                            fill="currentColor"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{
                                color: "#06175f",
                                fontWeight: "900",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px 0",
                            }}
                        >
                            PREMIUM EDITION
                        </Typography>
                        <Typography
                            sx={{
                                color: "#06175f",
                                fontWeight: "900",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            INCLUDES
                        </Typography>
                        <Box
                            sx={{
                                color: " #06175f",
                                fontWeight: "900",
                                padding: "0 0 0 40px",
                            }}
                        >
                            <ul>
                                <li>Base Game</li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>6 New Playable Characters </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>5 New Kameo Characters </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>1 Week Early Access To DLC Characters </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    Jean-Claude Van Damme Skin For Johnny <br />{" "}
                                    Cage{" "}
                                </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    1250 Dragon Krystals (In-game Currency){" "}
                                </li>
                            </ul>
                        </Box>

                        <Box />
                    </Box>
                </Box>
                <Box className="BoyNowBlock">
                    <Box className="BoyNowImage">
                        <img
                            src="https://cdn-mk1.mortalkombat.com/purchase/pack-kollectors.webp"
                            alt="oo"
                        />
                    </Box>
                    <Box>
                        <Box className="BuyNowButton">
                            <div data-tooltip="$249.99" class="button1">
                                <div class="button-wrapper">
                                    <div class="text">Buy Now</div>
                                    <span class="icon">
                                        <svg
                                            viewBox="0 0 16 16"
                                            class="bi bi-cart2"
                                            fill="currentColor"
                                            height="16"
                                            width="16"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{
                                color: "#06175f",
                                fontWeight: "900",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "20px 0",
                            }}
                        >
                            KOLLECTOR’S EDITION
                        </Typography>
                        <Typography
                            sx={{
                                color: "#06175f",
                                fontWeight: "900",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            INCLUDES
                        </Typography>
                        <Box
                            sx={{
                                color: " #06175f",
                                fontWeight: "900",
                                padding: "0 0 0 40px",
                            }}
                        >
                            <ul>
                                <li>Base Game</li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>6 New Playable Characters </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>5 New Kameo Characters </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>1 Week Early Access To DLC Characters </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    Jean-Claude Van Damme Skin For Johnny <br />{" "}
                                    Cage{" "}
                                </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                padding: "10px 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    2700 Dragon Krystals (In-game Currency){" "}
                                </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                fontWeight: "900",
                                padding: "0 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    Liu Kang sculpture designed by COARSE,
                                    <br /> with signature glow-in-the-dark
                                    details and <br /> standing an impressive
                                    16.5'' tall
                                </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                fontWeight: "900",
                                padding: "0 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    COARSE art prints inspired by <br /> Mortal
                                    Kombat 1
                                </li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                fontWeight: "900",
                                padding: "0 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>Exclusive steel case</li>
                            </ul>
                        </Box>
                        <Box
                            sx={{
                                color: " #06175f",
                                fontWeight: "900",
                                padding: "0 0 10px 40px",
                            }}
                        >
                            <ul>
                                <li>
                                    Exclusive Limited Edition Liu Kang In-Game{" "}
                                    <br /> Color Variant Inspired By The COARSE{" "}
                                    <br /> Figurine
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <TheShopFooter />
        </div>
    );
};

export default BoyNowMainBlock;
