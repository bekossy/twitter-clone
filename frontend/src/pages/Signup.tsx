import { Alert, Box, InputAdornment, TextField, Typography, styled } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useState } from 'react';
import SignupCreate from '../components/SignupCreate';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../redux/actions/authAction';
import { RootState } from '../redux/store';

const SignupBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
});

const SignupForm = styled(Box)(({ theme }) => ({
    boxShadow: theme.shadows[3],
    borderRadius: "15px",
    width: "100%",
    maxWidth: "600px",
    margin: "0 auto",
    minHeight: "600px",
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
        boxShadow: "none",
        minHeight: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
}));

const SignupContent = styled(Box)({
    maxWidth: "300px",
    width: "100%",
    margin: "0 auto",
    textAlign: "center",
});

const TextInput = styled(TextField)({
    margin: "7px 0",
    width: "100%",
});

const FormBtn = styled("button")({
    width: "100%",
    padding: "10px 0",
    borderRadius: "25px",
    margin: "20px 0",
    fontSize: "14px",
    border: "1px solid #dadce0",
    cursor: "pointer",
    transition: "all 0.2s ease-out",
    fontWeight: 600,
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": { backgroundColor: "rgba(0,0,0,0.85)" },
});

const Signup = () => {
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [createOpen, setCreateOpen] = useState<boolean>(false);
    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state: RootState) => state.auth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(signup(email, password, username, name));
    };

    return (
        <>
            <SignupBox>
                <SignupForm>
                    <SignupContent>
                        <TwitterIcon fontSize='large' sx={{ color: "#1D9BF0", cursor: "pointer" }} />

                        <Typography textAlign={"left"} variant='h1' my={4} fontSize={"32px"} fontWeight={700}>{createOpen ? "Create your account" : "Join Twitter today"}</Typography>

                        {createOpen ? (
                            <Box component={"form"} onSubmit={handleSubmit}>
                                <TextInput
                                    label={`Profile Name ${name.length}/50`}
                                    variant="outlined"
                                    value={name}
                                    inputProps={{ maxLength: 50 }}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <TextInput
                                    label="Username"
                                    variant="outlined"
                                    value={username.replace(/\s/g, "")}
                                    onChange={(e) => setUsername(e.target.value)}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AlternateEmailIcon fontSize='small' />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextInput
                                    label="Email"
                                    type='email'
                                    variant="outlined"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <TextInput
                                    label="Password"
                                    type='password'
                                    variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                {
                                    error && <Alert severity="error">{error}</Alert>
                                }

                                <FormBtn type="submit">{loading ? "Loading" : "Submit"}</FormBtn>
                            </Box>
                        ) : <SignupCreate setCreateOpen={setCreateOpen} />}

                        <Typography variant='body2' color={"#536471"} textAlign={"left"}>Have an account already? <Link to={"/login"} style={{ color: "#1D9BF0", textDecoration: "none" }}>Log in</Link></Typography>
                    </SignupContent>
                </SignupForm>
            </SignupBox>
        </>
    )
}

export default Signup
