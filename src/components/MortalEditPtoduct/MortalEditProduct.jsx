import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useMortal } from "../../context/MortalContext";
import { useNavigate, useParams } from "react-router-dom";

const MortalEditProoduct = () => {
    const [mortalName, setMortalName] = useState("");
    const [mortalPrice, setMortalPrice] = useState(0);
    const [mortalPhoto, setMortalPhoto] = useState("");
    const [mortalColor, setMortalColor] = useState("");
    const [mortalDescription, setMortalDescription] = useState("");
    const navigate = useNavigate();

    const { getOneMortalProduct, editMortalProduct, oneMortalProduct } =
        useMortal();
    const { id } = useParams();

    useEffect(() => {
        getOneMortalProduct(id);
    }, [id]);
    console.log(oneMortalProduct, "hello");

    useEffect(() => {
        if (oneMortalProduct) {
            setMortalName(oneMortalProduct.mortalName || "");
            setMortalPrice(oneMortalProduct.mortalPrice || 0);
            setMortalPhoto(oneMortalProduct.mortalPhoto || "");
            setMortalColor(oneMortalProduct.mortalColor || "");
            setMortalDescription(oneMortalProduct.mortalDescription || "");
        }
    }, [oneMortalProduct]);
    

    function handleMortalCombotEditSave() {
        let newMortalObjectPlus = {
            id: id,
            mortalName: mortalName,
            mortalPrice: mortalPrice,
            mortalPhoto: mortalPhoto,
            mortalColor: mortalColor,
            mortalDescription: mortalDescription,
        };

        editMortalProduct(id, newMortalObjectPlus);
        navigate("/the_shop");
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
                        MORTAL EDIT
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
                            value={mortalName}
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) => setMortalPrice(e.target.value)}
                            id="outlined-basic"
                            label="Price"
                            variant="outlined"
                            value={mortalPrice}
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) => setMortalPhoto(e.target.value)}
                            id="outlined-basic"
                            label="Photo"
                            variant="outlined"
                            value={mortalPhoto}
                        />
                    </Box>
                    <Box>
                        <TextField
                            onChange={(e) => setMortalColor(e.target.value)}
                            id="outlined-basic"
                            label="Color"
                            variant="outlined"
                            value={mortalColor}
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
                            value={mortalDescription}
                        />
                    </Box>
                    <Box>
                        <Button
                            variant="contained"
                            onClick={handleMortalCombotEditSave}
                        >
                            Edit product
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MortalEditProoduct;
