import React from "react";
import Header from "../Header/Header";
import Main from "../SectionMain/Main";
import SectionBlood from "../SectionMain/SectionBlood";
import SectionCombatPack from "../SectionMain/SectionCombatPack";
import SectionMainTheShop from "../SectionMain/SectionMainTheShop";
import SectionMainFooter from "../Footer/SectionMainFooter";

const SectionMain = () => {
    return (
        <div>
            <Header />
            <Main />
            <SectionBlood />
            <SectionCombatPack />
            <SectionMainTheShop />
            <SectionMainFooter />
        </div>
    );
};

export default SectionMain;
