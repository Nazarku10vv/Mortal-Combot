import { Box, Typography } from "@mui/material";
import React from "react";

const GameInfoBlockInvasions = () => {
  return (
    <>
      <div id="GameInfoBlockInvasions">
        <Box>
          <Box>
            <Typography
              variant="h3"
              sx={{
                textAlign: "center",
                color: "#fff",
                fontWeight: "900",
                padding: "20vh 0 2vh 0",
              }}
            >
              INVASIONS
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ textAlign: "center", color: "#fff", fontWeight: "900" }}
            >
              Fight against the invading forces that threaten your timeline.
              <br />
              <br />
              Invasions is a dynamic single player campaign with a variety of
              distinct challenges. With built in progression and RPG <br />{" "}
              mechanics, mixed with MK1’s incredible fighting action, Invasions
              provides deep, and engaging challenges, and a ton <br /> of
              rewards along the way.
            </Typography>
          </Box>
        </Box>
      </div>
      <video
      style={{
        width: "1905px",
      }}
        class="d-none d-lg-block fire fire-top"
        src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </>
  );
};

export default GameInfoBlockInvasions;
