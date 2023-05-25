import { Divider, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom';
import GoogleIcon from "../assets/googleIcon.svg";
import AppleIcon from '@mui/icons-material/Apple';

interface Props {
    setCreateOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SignupCreate: React.FC<Props> = ({ setCreateOpen }) => {
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
    })

    const BlueText = styled("span")({
        color: "#1D9BF0",
        cursor: "pointer"
    })
    return (
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
            <SignupBtn sx={{ fontWeight: 600, backgroundColor: "black", color: "#fff", "&:hover": { backgroundColor: "rgba(0,0,0,0.9)" } }} onClick={() => setCreateOpen(true)}>Create account</SignupBtn>

            <Typography variant='body2' color={"#536471"} fontSize={"12px"} textAlign={"left"} mb={4} lineHeight={1.1}>By signing up, you agree to the <BlueText>Terms of Service</BlueText> and <BlueText>Privacy Policy</BlueText>, including <BlueText>Cookie Use</BlueText>.</Typography>

            <Typography variant='body2' color={"#536471"} textAlign={"left"}>Have an account already? <Link to={"/login"} style={{ color: "#1D9BF0", textDecoration: "none" }}>Log in</Link></Typography>
        </>
    )
}

export default SignupCreate
