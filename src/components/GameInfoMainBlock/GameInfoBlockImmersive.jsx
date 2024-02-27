import { Box, Typography } from "@mui/material";
import React from "react";

const GameInfoBlockImmersive = () => {
  return (
    <div id="GameInfoBlockImmersive">
      <Box>
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "900",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              padding: "170px 0 30px 0",
            }}
          >
            IMMERSIVE STORY <br /> CAMPAIGN
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              fontWeight: "900",
            }}
          >
            Mortal Kombat’s genre-defining story mode kontinues. Reflecting Fire
            God Liu <br /> Kang’s vision of perfection, Mortal Kombat 1’s brand
            new universe is familiar, yet <br /> radically altered. And
            potentially, more dangerous than ever. Discover the <br /> forces
            set to undermine Liu Kang’s New Era.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default GameInfoBlockImmersive;
