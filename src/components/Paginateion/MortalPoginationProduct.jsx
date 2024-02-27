import Pagination from "@mui/material/Pagination";
import React from "react";
import { useMortal } from "../../context/MortalContext";

const MortalPoginationProduct = () => {
    const { page, setMortalCombatPage, MortalCount } = useMortal();

    function mortalPaginationProduct(p, n) {
        setMortalCombatPage(n);
    }
    return (
        <div>
            <Pagination
                onChange={mortalPaginationProduct}
                count={MortalCount}
                color="primary"
            />
        </div>
    );
};

export default MortalPoginationProduct;
