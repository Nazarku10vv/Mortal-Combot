import {
    Box,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
    Button,
} from "@mui/material";
import React, { useState } from "react";
import "./Sign.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useMortalAuthProduct } from "../../context/AuthContext";

const SignUpMortal = () => {
    const [showPassword, setShowPassword] = React.useState(false);


    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const { mortalProductRegister, signInWidthGoogleMortalProduct } =
        useMortalAuthProduct();

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function handleMortalProduct() {
        try {
            await mortalProductRegister(email, password);
            navigate("/");
        } catch (error) {
            console.log("erorr");
        }
    }

    return (
        <Box id="sign">
            <Box className="container1d ">
                <Box className="bold">
                    <div className="container1">
                        <img
                            style={{
                                width: "300px",
                                marginTop: "10pc",
                            }}
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5fbef0ad-821e-42ff-bd50-c54a0742abc7/dfxdf6z-74deba24-522d-418d-87d4-1e03bf4b20cb.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVmYmVmMGFkLTgyMWUtNDJmZi1iZDUwLWM1NGEwNzQyYWJjN1wvZGZ4ZGY2ei03NGRlYmEyNC01MjJkLTQxOGQtODdkNC0xZTAzYmY0YjIwY2IucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.7irtz-fBrcRQgWNo2mMYfAK5O1GoGOBjAriP8E0e66w"
                            alt=""
                        />
                        <Typography
                            sx={{
                                fontSize: "25px",
                                fontWeight: "900",
                                marginTop: "2pc",
                            }}
                            variant="h3"
                        >
                            У вас есть акаунт в игру Mortal Kombat 1
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "700",
                                marginTop: "1pc",
                            }}
                            variant="h4"
                        >
                            Чтобы получать последние новости, вам необходимо
                            подключить <br /> учетную запись WB Games.
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "18px",
                                fontWeight: "600",
                                marginTop: "2pc",
                            }}
                            variant="h5"
                        >
                            Введите свой адрес электронной почты, чтобы зайти
                            учетную <br /> запись или{" "}
                            <Link to={"/sign_in"}>регистрация</Link> в новую
                            учетную запись.
                        </Typography>
                        <Box
                            sx={{
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "cenetr",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    style={{
                                        display: "flex",
                                        alignItems: "cenetr",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        margin: "20px 0 0 32pc",
                                        width: "500px",
                                    }}
                                    placeholder="email..."
                                    class="email"
                                    name="text"
                                    type="text"
                                />
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    style={{
                                        display: "flex",
                                        alignItems: "cenetr",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        margin: "10px 0 0 32pc",
                                        width: "500px",
                                    }}
                                    placeholder="password..."
                                    class="email"
                                    name="text"
                                    type="text"
                                />
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        marginTop: "1pc",
                                    }}
                                    variant="h6"
                                >
                                    WB сохранит эту информацию для управления
                                    учетной записью и для осуществления <br />{" "}
                                    поддержки.
                                </Typography>
                                <Button
                                    onClick={handleMortalProduct}
                                    sx={{
                                        border: "1px solid #161616",
                                        background: "blue",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "cenetr",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        margin: "10px 0 0 32pc",
                                        width: "500px",
                                    }}
                                >
                                    ПРОДОЛЖИТЬ
                                </Button>
                                <Button
                                    onClick={() =>
                                        signInWidthGoogleMortalProduct()
                                    }
                                    sx={{
                                        border: "1px solid #161616",
                                        background: "blue",
                                        color: "white",
                                        display: "flex",
                                        alignItems: "cenetr",
                                        justifyContent: "center",
                                        flexDirection: "column",
                                        margin: "10px 0 0 32pc",
                                        width: "500px",
                                    }}
                                >
                                    Google
                                </Button>
                            </Box>
                        </Box>
                    </div>
                </Box>
            </Box>
        </Box>
    );
};

export default SignUpMortal;
