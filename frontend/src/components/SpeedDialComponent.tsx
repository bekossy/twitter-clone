import { Box, SpeedDial, SpeedDialAction, styled } from "@mui/material";
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from "react-redux";
import { logout } from "../redux/actions/authAction";

const SpeedDialBox = styled(Box)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("sm")]: {
        display: "block"
    }
}))

const SpeedDialComponent = () => {
    const dispatch = useDispatch();
    return (
        <SpeedDialBox>
            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'fixed', bottom: 20, right: 25 }}
                icon={<SpeedDialIcon />}
            >
                <SpeedDialAction tooltipTitle="logout" onClick={() => dispatch(logout())} icon={<LogoutIcon />} />
            </SpeedDial>
        </SpeedDialBox>
    )
}

export default SpeedDialComponent
