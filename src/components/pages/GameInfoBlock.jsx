import React from "react";
import BoyNowInGameInfoBlockHeader from "../Header/BoyNowInGameInfoBlockHeader";
import Header from "../Header/Header";
import GameInfoBlockMain from "../GameInfoMainBlock/GameInfoBlockMain";
import GameInfoBlockKameo from "../GameInfoMainBlock/GameInfoBlockKameo";
import GameInfoBlockInvasions from "../GameInfoMainBlock/GameInfoBlockInvasions";
import GameInfoBlockImmersive from "../GameInfoMainBlock/GameInfoBlockImmersive";
import SectionMainTheShop from "../SectionMain/SectionMainTheShop";
import SectionMainFooter from "../Footer/SectionMainFooter";

const GameInfoBlock = () => {
  return (
    <div>
      <div className="blok11">
        <Header />
        <BoyNowInGameInfoBlockHeader />
      </div>
      <div className="block111">
        <GameInfoBlockMain />
        <GameInfoBlockKameo />
        <GameInfoBlockImmersive />
        <GameInfoBlockInvasions />
        <div style={{
          marginTop: "-1pc"
        }}>
          <SectionMainTheShop />
          <SectionMainFooter />
        </div>
      </div>
    </div>
  );
};

export default GameInfoBlock;
