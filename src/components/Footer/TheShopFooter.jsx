import { Box, Typography } from "@mui/material";
import React from "react";

const TheShopFooter = () => {
    return (
        <Box className="TheShopFooterBagraund">
            <Box className="container1">
                <Box className="TheShopFooterMk">
                    <Box sx={{ display: "flex", padding: "90px 0" }}>
                        <img
                            loading="lazy"
                            height="70px"
                            width="200px"
                            src="//wbshop.com/cdn/shop/files/2023_Logo_-_white_-_450px_1_x55@2x.png?v=1675939124"
                            alt="Warner Bros. Shop"
                        />
                    </Box>
                    <Box>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "white",
                                fontWeight: "900",
                                fontSize: "17px",
                                padding: "84px 0 0 0",
                            }}
                        >
                            Customer Service <br /> <br />
                            <Typography sx={{ color: "white" }}>
                                Support Center <br /> <br />
                                Order Status <br /> <br />
                                Returns Center Portal <br /> <br />
                                Promotional Disclaimers <br /> <br />
                                Accessibility Statement <br /> <br />
                                Refund Policy <br /> <br />
                                Terms of Service <br /> <br />
                                Privacy Policy <br /> <br />
                                Cookie Policy <br /> <br />
                                Legal Imprint <br /> <br />
                                Ad Choices <br /> <br />
                            </Typography>
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: "900",
                                fontSize: "17px",
                                padding: "84px 0 0 0",
                            }}
                        >
                            Account & Ordering <br /> <br />
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                            My Account <br /> <br />
                            Ordering Policy <br /> <br />
                            Shipping Policy <br /> <br />
                            Volume Discounts <br /> <br />
                        </Typography>
                    </Box>
                    <Box>
                        <Typography
                            sx={{
                                color: "white",
                                fontWeight: "900",
                                fontSize: "17px",
                                padding: "84px 0 0 0",
                            }}
                        >
                            Explore More
                            <br /> <br />
                        </Typography>
                        <Typography sx={{ color: "white" }}>
                            Blog <br /> <br />
                            HBO Shop <br /> <br />
                            DC Shop <br /> <br />
                            Looney Tunes <br /> <br />
                            ~
                        </Typography>
                    </Box>
                </Box>
                <Box></Box>
                <Box></Box>
                <Box>
                    <Typography sx={{ color: "white", fontSize: "12px" }}>
                        WB Shop is operated under license from Warner Bros.
                        Consumer Products by Snow Commerce, which is soley
                        responsible for the site's content and all aspects of
                        your purchase. © & ™ Warner Bros. Entertainment Inc.{" "}
                        <br /> 2022. All Rights Reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default TheShopFooter;
