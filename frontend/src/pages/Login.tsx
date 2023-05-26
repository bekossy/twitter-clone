import { Box, Divider, TextField, Typography, styled } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from "../assets/googleIcon.svg";
import AppleIcon from '@mui/icons-material/Apple';
import { useState } from 'react';
import { Link } from "react-router-dom";

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

const SignupBtn = styled("button")({
  width: "100%",
  backgroundColor: "#fff",
  padding: "8px 0",
  borderRadius: "25px",
  margin: "15px 0",
  fontSize: "14px",
  border: "1px solid #dadce0",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  transition: "all 0.2s ease-out",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.05)"
  }
});


const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isNext, setIsNext] = useState<boolean>(false);
  const [helpText, setHelpText] = useState<string>("");
  const [isError, setIsError] = useState(false);

  const handleNext = () => {
    if (email) {
      setIsNext(true)
      setHelpText("")
      setIsError(false)
    }
    setHelpText("Enter your Email")
    setIsError(true)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <>
      <SignupBox>
        <SignupForm>
          <SignupContent>
            <TwitterIcon fontSize='large' sx={{ color: "#1D9BF0", cursor: "pointer" }} />

            <Typography textAlign={"left"} variant='h1' my={4} fontSize={"32px"} fontWeight={700}>Sign in to Twitter</Typography>

            {isNext || (
              <>
                <SignupBtn>
                  <img src={GoogleIcon} alt="" />
                  Sign in with Google
                </SignupBtn>
                <SignupBtn sx={{ fontWeight: 600 }}>
                  <AppleIcon />
                  Sign in with Apple
                </SignupBtn>
                <Divider>or</Divider>
              </>
            )}

            <Box component={"form"} onSubmit={handleSubmit}>
              <TextInput
                label="Email"
                type='email'
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                helperText={!email ? helpText : ""}
                error={!email ? isError : false}
              />

              {isNext && (
                <>
                  <TextInput
                    label="Password"
                    type='password'
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    helperText={!password ? "Enter your password" : ""}
                  />
                </>
              )}

              {isNext && (
                <>
                  <SignupBtn sx={{ fontWeight: 600, backgroundColor: "black", color: "#fff", "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" } }} type="submit">Log In</SignupBtn>
                </>
              )}

              {isNext || (
                <>
                  <SignupBtn type="button" sx={{ fontWeight: 600, backgroundColor: "black", color: "#fff", "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" } }} onClick={handleNext}>Next</SignupBtn>
                  <SignupBtn type="button" sx={{ fontWeight: 700 }}>Forgot password?</SignupBtn>
                </>
              )}
            </Box>

            <Typography variant='body2' color={"#536471"} textAlign={"left"}>Don't have an account? <Link to={"/signup"} style={{ color: "#1D9BF0", textDecoration: "none" }}>Sign Up</Link></Typography>
          </SignupContent>
        </SignupForm>
      </SignupBox>
    </>
  )
}

export default Login
