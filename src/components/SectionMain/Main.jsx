import React from "react";
import Vidio from "../Vidio/Vidio";
import { Avatar, Box, Button } from "@mui/material";
import "./SectionMain.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Box className="main">
                <Box>
                    <Vidio />
                    <Box className="mainBlock" display="" mx="" my="" sx="">
                        <Avatar
                            className="avatarortalCombat1"
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fbef0ad-821e-42ff-bd50-c54a0742abc7/dfxdf6z-74deba24-522d-418d-87d4-1e03bf4b20cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmYmVmMGFkLTgyMWUtNDJmZi1iZDUwLWM1NGEwNzQyYWJjN1wvZGZ4ZGY2ei03NGRlYmEyNC01MjJkLTQxOGQtODdkNC0xZTAzYmY0YjIwY2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7irtz-fBrcRQgWNo2mMYfAK5O1GoGOBjAriP8E0e66w"
                            sx={{ width: "770px", height: "220px" }}
                        />
                        <Button onClick={() => navigate("/boyNow")}>
                            BUY NOW
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ marginTop: "-9.8pc" }}>
                <video
                    style={{ width: "1905px" }}
                    class="d-none d-lg-block fire fire-down"
                    src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                ></video>
            </Box>
        </div>
    );
};

export default Main;
