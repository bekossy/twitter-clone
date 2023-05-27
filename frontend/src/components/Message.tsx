import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Box, Typography, styled } from '@mui/material';
import { Stack } from '@mui/system';

const MessageBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    position: "fixed",
    bottom: "0",
    right: "40px",
    width: "400px",
    padding: "10px 15px",
    boxShadow: theme.shadows[5],
    cursor: "pointer",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    [theme.breakpoints.down("mssg")]: {
        display: "none",
    }
}));

const IconPadding = styled(Box)({
    padding: "5px",
    borderRadius: "50%",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)"
    }
})

const Message = () => {
    return (
        <>
            <MessageBox>
                <Typography fontSize={"20px"} fontWeight={600}>Messages</Typography>

                <Stack direction={"row"} alignItems={"center"}>
                    <IconPadding>
                        <PersonOutlineOutlinedIcon />
                    </IconPadding>
                    <IconPadding>
                        <PersonOutlineOutlinedIcon />
                    </IconPadding>
                </Stack>
            </MessageBox>
        </>
    )
}

export default Message
