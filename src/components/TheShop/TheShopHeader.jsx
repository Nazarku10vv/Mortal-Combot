import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Avatar, Typography } from "@mui/material";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import "./TheShop.css";
import { useMortal } from "../../context/MortalContext";
import { ADMIN_ORTAL_PRODUCT } from "../helpers/const";
import { useMortalAuthProduct } from "../../context/AuthContext";

const TheShopMainHeader = () => {
  const { setMortalProduct, mortalProduct, readMortalCombatProduct } =
    useMortal();

  const [search, setSearch] = useState("");

  function searchProduct() {
    const result = mortalProduct.filter(
      (el) =>
        el.mortalName.toLowerCase().includes(search) ||
        el.mortalName.toUpperCase().includes(search) ||
        el.mortalPrice.toString().includes(search)
    );
    setMortalProduct(result);
  }

  useEffect(() => {
    if (search.trim() !== "") {
      searchProduct();
    } else {
      readMortalCombatProduct();
    }
  }, [search, readMortalCombatProduct, setMortalProduct]);

  const { user } = useMortalAuthProduct();

  return (
    <Box className="mortaHeader">
      <Box className="container1">
        <Box className="mortalHeader">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              className="mkCOl"
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box className="mkHeader">
                <Link to="/">
                  <Avatar
                    sx={{
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                    }}
                    src="https://seeklogo.com/images/W/wb-warner-bros-logo-50CFB66DB7-seeklogo.com.png"
                  />
                </Link>
                <Typography
                  className="mkColor"
                  style={{
                    color: "rgb(7, 7, 122)",
                    fontSize: "22px",
                    fontWeight: "800",
                    cursor: "pointer",
                    width: "200px",
                  }}
                >
                  THE SHOP
                </Typography>
              </Box>
              <Typography
                id="mkCol"
                variant="a"
                style={{
                  marginLeft: "-3pc",
                  fontSize: "10px",
                  fontWeight: "800",
                  padding: "0 10px",
                  cursor: "pointer",
                }}
              >
                TED LASSO
              </Typography>
              <Typography
                id="mkCol"
                variant="a"
                style={{
                  fontSize: "10px",
                  fontWeight: "800",
                  cursor: "pointer",
                }}
              >
                HOUSE OF THE DRAGON
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
                className=""
              >
                <nav id="menu">
                  <div className="menu-item">
                    <div className="menu-text">
                      <a
                        style={{
                          color: "black",
                          fontSize: "10px",
                        }}
                        href="#"
                      >
                        FEATURED
                      </a>
                    </div>
                    <div className="sub-menu">
                      <div class="icon-box">
                        <div class="icon">
                          <i class="fal fa-wind-turbine"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Turbo Editor <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">
                            Edit your code while slowing down time.
                          </div>
                        </div>
                      </div>
                      <div class="icon-box">
                        <div class="icon">
                          <i class="fal fa-lightbulb-on"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Idea Creator <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">
                            Think of an idea, and have an AI create it.
                          </div>
                        </div>
                      </div>
                      <div class="icon-box">
                        <div class="icon">
                          <i class="fal fa-bomb"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Super Collider <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">
                            Remove mass from any object.
                          </div>
                        </div>
                      </div>
                      <div class="sub-menu-holder"></div>
                    </div>
                  </div>
                  <div class="menu-item highlight">
                    <div class="menu-text">
                      <a
                        className="menuu"
                        style={{
                          color: "black",
                          fontSize: "10px",
                        }}
                        href="#"
                      >
                        SHOP BY TITLE
                      </a>
                    </div>
                    <div class="sub-menu double">
                      <div class="icon-box gb a">
                        <div class="icon">
                          <i class="far fa-question-circle"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Consult <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">From Professionals</div>
                        </div>
                      </div>
                      <div class="icon-box gb b">
                        <div class="icon">
                          <i class="far fa-users-class"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Teach <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">In Classroom</div>
                        </div>
                      </div>
                      <div class="icon-box gb c">
                        <div class="icon">
                          <i class="far fa-school"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Learn <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">By Video</div>
                        </div>
                      </div>
                      <div class="icon-box gb d">
                        <div class="icon">
                          <i class="far fa-chess-rook"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Keep <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">The Castle</div>
                        </div>
                      </div>
                      <div class="icon-box gb e">
                        <div class="icon">
                          <i class="far fa-video-plus"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Become <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">A Creator</div>
                        </div>
                      </div>
                      <div class="icon-box gb f">
                        <div class="icon">
                          <i class="far fa-cat"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Understand <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">Our Journey</div>
                        </div>
                      </div>
                      <div class="bottom-container">
                        Ready to dive in? <a href="#">Get Started</a>
                      </div>
                      <div class="sub-menu-holder"></div>
                    </div>
                  </div>
                  <div class="menu-item highlight">
                    <div class="menu-text">
                      <a
                        style={{
                          color: "black",
                          fontSize: "10px",
                        }}
                        href="#"
                      >
                        CATEGORIES
                      </a>
                    </div>
                    <div class="sub-menu triple">
                      <div class="top-container gb c icon-box">
                        <div class="icon big">
                          <i class="far fa-book"></i>
                        </div>
                        <div class="text">
                          <div class="title">Where to start</div>
                          <div class="sub-text">
                            Find out where to begin below
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <h3>Your Journey</h3>
                        <a href="#">Get Started</a>
                        <a href="#">Learn the Basics</a>
                        <a href="#">Get Advanced</a>
                        <a href="#">Start Teaching</a>
                      </div>
                      <div class="box">
                        <h3>Your Tools</h3>
                        <a href="#">Turbo Editor</a>
                        <a href="#">Time Stopper</a>
                        <a href="#">Brain Enhancer</a>
                        <a href="#">Network Maker</a>
                      </div>
                      <div class="icon-box flat">
                        <div class="icon">
                          <i class="fal fa-plug"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            API Guide <i class="far fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                      <div class="icon-box flat">
                        <div class="icon">
                          <i class="fal fa-comments"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Support Line <i class="far fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                      <div class="icon-box flat">
                        <div class="icon">
                          <i class="fal fa-phone-volume"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Live Chat <i class="far fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                      <div class="icon-box flat">
                        <div class="icon">
                          <i class="fal fa-book-spells"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Documentation <i class="far fa-arrow-right"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="menu-item">
                    <div class="menu-text">
                      <a
                        style={{
                          color: "black",
                          fontSize: "10px",
                        }}
                        href="#"
                      >
                        EXPERIENCES
                      </a>
                    </div>
                    <div class="sub-menu">
                      <div class="icon-box">
                        <div class="icon">
                          <i class="far fa-satellite"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Forum <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">
                            Join our passionate community.
                          </div>
                        </div>
                      </div>
                      <div class="icon-box">
                        <div class="icon">
                          <i class="fab fa-twitter-square"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Twitter <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">Follow us on twitter.</div>
                        </div>
                      </div>
                      <div class="icon-box">
                        <div class="icon">
                          <i class="fab fa-twitch"></i>
                        </div>
                        <div class="text">
                          <div class="title">
                            Live Stream <i class="far fa-arrow-right"></i>
                          </div>
                          <div class="sub-text">
                            We stream content every day.
                          </div>
                        </div>
                      </div>
                      <div class="sub-menu-holder"></div>
                    </div>
                  </div>
                  <div id="sub-menu-container">
                    <div id="sub-menu-holder">
                      <div id="sub-menu-bottom"></div>
                    </div>
                  </div>
                </nav>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                ml: "25pc",
                gap: "10px",
              }}
            >
              <>
                <div class="InputContainer">
                  <input
                    type="text"
                    onChange={(e) => setSearch(e.target.value)}
                    name="text"
                    class="input"
                    id="input"
                    placeholder="Search"
                    value={search}
                  />

                  <label for="input" class="labelforsearch">
                    <svg viewBox="0 0 512 512" class="searchIcon">
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path>
                    </svg>
                  </label>
                  <div class="border"></div>

                  <button class="micButton">
                    <svg viewBox="0 0 384 512" class="micIcon">
                      <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path>
                    </svg>
                  </button>
                </div>
              </>

              <PermContactCalendarIcon className="PermContactCalendarIcon" />
              <FavoriteIcon className="FavoriteIcon" />
              <HttpsIcon className="HttpsIcon" />

              {ADMIN_ORTAL_PRODUCT.map((el) =>
                user && el.email === user.email ? (
                  <Link to="/admin">
                    <AdminPanelSettingsIcon className="adminThe" />
                  </Link>
                ) : (
                  ""
                )
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TheShopMainHeader;
