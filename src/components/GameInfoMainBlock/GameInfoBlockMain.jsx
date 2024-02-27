import React from "react";
import "./GameInfo.css";
import { Box, Typography } from "@mui/material";

const GameInfoBlockMain = () => {
  return (
    <Box id="GameInfoMainPov">
      <Box id="GameInfoMainBac">
        <Box className="container11">
          <Box className="bl">
            <Box className="GemeInfoBlock">
              <Box>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "900" }}
                >
                  JUSTICE. THEIR WAY.
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ color: "#fff", fontWeight: "900" }}
                >
                  KOMBAT PACK
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ color: "#fff", fontWeight: "900" }}>
                  Introducing your roster for the Mortal Kombat 1 Kombat Pack
                  fighters.
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ color: " #ffecc5", fontWeight: "600" }}
                >
                  TAKEDA • QUAN CHI • ERMAC • PEACEMAKER • HOMELANDER • OMNI-MAN
                </Typography>
              </Box>

              <Box
               
              className="GameInfoVedio">
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
        </Box>
      </Box>
      ;
    </Box>
  );
};

export default GameInfoBlockMain;
