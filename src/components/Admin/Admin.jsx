import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import "./Admin.css";
import { useMortal } from "../../context/MortalContext";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const [mortalName, setMortalName] = useState("");
    const [mortalPrice, setMortalPrice] = useState(0);
    const [mortalPhoto, setMortalPhoto] = useState("");
    const [mortalColor, setMortalColor] = useState("");
    const [mortalDescription, setMortalDescription] = useState("");

    const { addMortalCombatPlus } = useMortal();
    const navigate = useNavigate();

    console.log(mortalName);
    function handleMortalCombot() {
        let newMortalObjectPlus = {
            mortalName: mortalName,
            mortalPrice: mortalPrice,
            mortalPhoto: mortalPhoto,
            mortalColor: mortalColor,
            mortalDescription: mortalDescription,
        };

        addMortalCombatPlus(newMortalObjectPlus);
    }

    return (
        <Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    width: "100%",
                    height: "80vh",
                    gap: "20px",
                }}
            >
                <Box>
                    <Typography
                        variant="h4"
                        className="adminMAin"
                        color="initial"
                    >
                        MORTAL ADMIN
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <Box>
                        <TextField
                            onChange={(e) => setMortalName(e.target.value)}
                            id="outlined-basic"
                            label="Name"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) => setMortalPrice(e.target.value)}
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) => setMortalPhoto(e.target.value)}
                            id="outlined-basic"
                            label="Photo"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) => setMortalColor(e.target.value)}
                            id="outlined-basic"
                            label="Color"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) =>
                                setMortalDescription(e.target.value)
                            }
                            id="outlined-basic"
                            label="Description"
                            variant="outlined"
                        />
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            onClick={() => {
                                handleMortalCombot();
                                navigate("/the_shop");
                            }}
                        >
                            Create product
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Admin;
