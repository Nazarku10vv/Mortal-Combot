import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const GameInfoBlockKameo = () => {
  return (
    <>
      <Box
        sx={{
          m: "-2pc 0 0 0",
          width: "1905px",
        }}
      >
        <video
          style={{
            width: "100%",
          }}
          class="d-none d-lg-block fire fire-top invasions"
          src="https://cdn-mk1.mortalkombat.com/static/fire-line-bot-loop.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </Box>
      <Box id="KameoInfoMainPov">
        <Box id="KameoInfoMainBac">
          <Box className="dl">
            <Box className="KameoInfoBlock">
              <Box className="Kameo">
                <Box sx={{ color: "rgb(6, 25, 131)", fontWeight: "800" }}>
                  <Typography
                    variant="h3"
                    sx={{ color: "#fff", fontWeight: "800" }}
                  >
                    KAMEO FIGHTERS
                  </Typography>
                </Box>
                <Box sx={{ color: "rgb(6, 25, 131)", padding: "30px 0" }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: "800" }}
                  >
                    Kameos are a unique roster of partner fighters who assist{" "}
                    <br /> the main fighter during matches, creating expanded{" "}
                    <br /> gameplay possibilities for players. <br /> <br />
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: "800" }}
                  >
                    Kameos dramatically enhance every fight, assisting <br />{" "}
                    teammates with their own Special Moves, Throws and <br />{" "}
                    defensive Breakers.
                  </Typography>
                </Box>
              </Box>
              <Box className="KamoeImg">
                <img
                  class="poster img-fluid"
                  src="https://cdn-mk1.mortalkombat.com/game/kameo-screen-04-t.jpg"
                  alt=""
                ></img>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <video
        style={{
          width: "100%",
        }}
        class="d-none d-lg-block fire fire-down invasions"
        src="https://cdn-mk1.mortalkombat.com/static/fire-line-top-loop.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
    </>
  );
};

export default GameInfoBlockKameo;
