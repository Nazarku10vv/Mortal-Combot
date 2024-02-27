import React, { useEffect, useState } from "react";
import { useMortal } from "../../context/MortalContext";
import { Box, Button, Typography } from "@mui/material";
import "./TheShop.css";
import { useNavigate } from "react-router-dom";
import MortalPoginationProduct from "../Paginateion/MortalPoginationProduct";
import { useMortalAuthProduct } from "../../context/AuthContext";
import { ADMIN_ORTAL_PRODUCT } from "../helpers/const";

const TheShopMain = () => {
  const {
    mortalProduct,
    readMortalCombatProduct,
    mortalDeleteProduct,
    currentPage,
    setMortalProduct,
  } = useMortal();

  const navigate = useNavigate();
  const [sortMortal, setSortortal] = useState("");

  useEffect(() => {
    readMortalCombatProduct();
  }, []);

  useEffect(() => {
    if (mortalProduct) {
      const sordMortalProduct = [...mortalProduct];
      if (sortMortal === "a-z") {
        sordMortalProduct.sort((a, b) =>
          a.mortalName.localeCompare(b.mortalName)
        );
      } else if (sortMortal === "z-a") {
        sordMortalProduct.sort((a, b) =>
          b.mortalName.localeCompare(a.mortalName)
        );
      }
      setMortalProduct(sordMortalProduct);
    }
  }, [mortalProduct, sortMortal]);

  console.log(mortalProduct);
  const { user } = useMortalAuthProduct();

  function handleSortChange(e) {
    setSortortal(e.target.value);
  }

  if (!mortalProduct) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Box
        sx={{
          marginTop: "9pc",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "1700px",
        }}
      >
        <Typography>
          <Typography
            variant="p"
            sx={{
              color: "blue",
              marginLeft: "6.5pc",
            }}
          >
            Home
          </Typography>{" "}
          Mortal Kombat
        </Typography>

        <Box>
          <select
            style={{
              border: "none",
              fontSize: "21px",
              background: "none",
              outline: "none",
            }}
            onChange={handleSortChange}
          >
            <option value="all">All</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
          </select>
        </Box>
      </Box>
      <Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
              gap: "40px",
              flexWrap: "wrap",
            }}
          >
            {mortalProduct ? (
              currentPage().map((el) => (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    marginTop: "2pc",
                  }}
                  key={el.id}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <Button>NEW</Button>
                    {el.mortalPhoto ? (
                      <img
                        style={{
                          width: "400px",
                          height: "400px",
                        }}
                        src={el.mortalPhoto}
                        alt="NOTE PHOTO"
                      />
                    ) : (
                      <div
                        style={{
                          width: "400px",
                          height: "400px",
                        }}
                        id="wifi-loader"
                      >
                        <svg class="circle-outer" viewBox="0 0 86 86">
                          <circle class="back" cx="43" cy="43" r="40"></circle>
                          <circle class="front" cx="43" cy="43" r="40"></circle>
                          <circle class="new" cx="43" cy="43" r="40"></circle>
                        </svg>
                        <svg class="circle-middle" viewBox="0 0 60 60">
                          <circle class="back" cx="30" cy="30" r="27"></circle>
                          <circle class="front" cx="30" cy="30" r="27"></circle>
                        </svg>
                        <svg class="circle-inner" viewBox="0 0 34 34">
                          <circle class="back" cx="17" cy="17" r="14"></circle>
                          <circle class="front" cx="17" cy="17" r="14"></circle>
                        </svg>
                        <div class="text" data-text="find photo"></div>
                      </div>
                    )}
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: "center",
                          fontSize: "12px",
                          width: "400px",
                          margin: "20px 0 0 0",
                        }}
                        variant="h6"
                        color="initial"
                      >
                        {el.mortalName ? el.mortalName : "FIND NAME"}
                      </Typography>
                      <Typography
                        sx={{
                          textAlign: "center",
                          marginLeft: "-0.5pc",
                          marginBottom: "10px",
                        }}
                        variant="h6"
                        color="initial"
                      >
                        {el.mortalPrice ? el.mortalPrice : "FIND PRICE"}
                      </Typography>
                    </Box>
                    {ADMIN_ORTAL_PRODUCT.map((el) =>
                      user && el.email === user.email ? (
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            alignContent: "center",
                            textAlign: "center",
                            gap: "10px",
                            width: "100%",
                          }}
                        >
                          <button
                            onClick={() => mortalDeleteProduct(el.id)}
                            class="button"
                          >
                            <span class="X"></span>
                            <span class="Y"></span>
                            <div class="close">Close</div>
                          </button>

                          <button
                            class="edit-button"
                            onClick={() => navigate(`/edit/${el.id}`)}
                          >
                            <svg class="edit-svgIcon" viewBox="0 0 512 512">
                              <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                            </svg>
                          </button>
                        </Box>
                      ) : (
                        ""
                      )
                    )}
                  </Box>
                </Box>
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </Box>
          <MortalPoginationProduct />
        </Box>
      </Box>
    </>
  );
};

export default TheShopMain;
