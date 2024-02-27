import React from "react";

import TheShopMain from "../TheShop/TheShopMain";
import TheShopMainHeader from "../TheShop/TheShopHeader";
import TheShopMainBlock from "../TheShop/TheShopMainBlock";
import TheShopGetOver from "../TheShop/TheShopGetOver";
import TheShopSave from "../TheShop/TheShopSave";
import TheShopFooter from "../Footer/TheShopFooter";

const TheShop = () => {
    return (
        <div>
            <TheShopMainHeader />

            <TheShopMainBlock />
            <TheShopMain />
            <TheShopGetOver />
            <TheShopSave />
            <TheShopFooter />
        </div>
    );
};

export default TheShop;
