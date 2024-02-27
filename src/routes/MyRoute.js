import React from "react";
import { Route, Routes } from "react-router-dom";
import SectionMain from "../components/pages/SectionMain";
import TheShop from "../components/pages/TheShop";
import Admin from "../components/Admin/Admin";
import BoyNowMainBlock from "../components/BoyNowMain/BoyNowMainBlock";

import MortalEditProoduct from "../components/MortalEditPtoduct/MortalEditProduct";
import SignInMortal from "../components/MortalAuthentication/SignInMortal";
import SignUpmortal from "../components/MortalAuthentication/SignUpmortal";
import { ProtectedRoutes } from "../components/helpers/function";
import GameInfoBlock from "../components/pages/GameInfoBlock";

const MyRoute = () => {
    const MORTAL_PRIATE = [
        { link: "/admin", element: <Admin />, id: 1 },
        { link: "/edit/:id", element: <MortalEditProoduct />, id: 2 },
    ];
    const MORTAL_ROUTES = [
        { link: "/", element: <SectionMain />, id: 3 },
        { link: "/the_shop", element: <TheShop />, id: 4 },
        { link: "/boyNow", element: <BoyNowMainBlock />, id: 5 },
        { link: "/sign_in", element: <SignInMortal />, id: 5 },
        { link: "/sign_up", element: <SignUpmortal />, id: 6 },
        { link: "/game_info", element: <GameInfoBlock />, id: 7 },

    ];

    return (
        <Routes>
            <Route title={<ProtectedRoutes />}>
                {MORTAL_PRIATE.map((el) => (
                    <Route path={el.link} element={el.element} key={el.id} />
                ))}
            </Route>
            {MORTAL_ROUTES.map((el) => (
                <Route path={el.link} element={el.element} key={el.id} />
            ))}
        </Routes>
    );
};

export default MyRoute;
