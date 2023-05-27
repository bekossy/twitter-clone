import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HashIcon from '../assets/hashIcon.svg';
import moreIcon from '../assets/moreIcon.svg';
import MssgIcon from "../assets/mssgIcon.svg";
import NotificationIcon from "../assets/bellIcon.svg";
import ListIcon from "../assets/listIcon.svg";
import { Avatar, Box, Stack, Typography, styled, Badge, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

const SideNavBox = styled(Box)(({ theme }) => ({
    width: "300px",
    height: "100%",
    overflowY: "auto",
    position: "fixed",
    borderRight: "1px solid #000",
    display: "flex",
    flexDirection: "column",
    padding: "0 10px",
    [theme.breakpoints.down("xl")]: {
        width: "fit-content",
        alignItems: "center"
    }
}));

const NavPadding = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "12px 18px",
    borderRadius: "50px",
    gap: "20px",
    cursor: "pointer",
    margin: "3px 0",
    width: "fit-content",
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    [theme.breakpoints.down("xl")]: {
        padding: "8px 10px",
    }
}));

const NavIcon = styled(Stack)(({ theme }) => ({
    display: "none",
    padding: "8px 10px",
    borderRadius: "50%",
    cursor: "pointer",
    margin: "3px 0",
    width: "fit-content",
    transition: "all 0.3s ease-in",
    backgroundColor: "#1D9BF0",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#138adf",
    },
    [theme.breakpoints.down("xl")]: {
        display: "block"
    }
}));

const NavTweet = styled(Stack)(({ theme }) => ({
    display: "block",
    textAlign: "center",
    padding: "12px 18px",
    borderRadius: "50px",
    gap: "20px",
    cursor: "pointer",
    margin: "3px 0",
    width: "85%",
    transition: "all 0.3s ease-in",
    backgroundColor: "#1D9BF0",
    color: "#fff",
    "&:hover": {
        backgroundColor: "#138adf",
    },
    [theme.breakpoints.down("xl")]: {
        display: "none",
    }
}));

const NavText = styled(Typography)(({ theme }) => ({
    fontSize: "19px",
    display: "block",
    [theme.breakpoints.down("xl")]: {
        display: "none",
    }
}));

const NavBtn = styled("button")({
    marginTop: "auto",
    outline: "none",
    border: "none",
    backgroundColor: "#fff"
})

const NavAvatar = styled(Box)(({ theme }) => ({
    display: "none",
    padding: "12px 18px",
    borderRadius: "50px",
    cursor: "pointer",
    margin: "3px 0",
    width: "fit-content",
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    [theme.breakpoints.down("xl")]: {
        display: "block",
        padding: "8px 10px",
    }
}));

const NavMenu = styled(Stack)(({ theme }) => ({
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "12px 18px",
    borderRadius: "50px",
    gap: "20px",
    cursor: "pointer",
    margin: "3px 0",
    width: "100%",
    transition: "all 0.3s ease-in",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    [theme.breakpoints.down("xl")]: {
        display: "none",
    }
}));

const SideNav = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Box flex={1}>
                <SideNavBox>
                    <Stack>
                        <NavPadding>
                            <TwitterIcon sx={{ color: "#1D9BF0", fontSize: "30px" }} />
                        </NavPadding>
                        <NavPadding>
                            <Badge color="primary" variant="dot" sx={{ '& .MuiBadge-badge': { bgcolor: "#1D9BF0", right: "2px" } }}>
                                <HomeIcon sx={{ fontSize: "30px" }} />
                            </Badge>
                            <NavText fontWeight={600}>Home</NavText>
                        </NavPadding>
                        <NavPadding>
                            <img src={HashIcon} alt="" />
                            <NavText>Explore</NavText>
                        </NavPadding>
                        <NavPadding>
                            <Badge color='primary' sx={{ '& .MuiBadge-badge': { left: "-25px", right: "15px", bgcolor: "#1D9BF0" } }} badgeContent={21} max={20}>
                                <img src={NotificationIcon} alt="" />
                            </Badge>
                            <NavText>Notifications</NavText>
                        </NavPadding>
                        <NavPadding>
                            <img src={MssgIcon} alt="" />
                            <NavText>Messages</NavText>
                        </NavPadding>
                        <NavPadding>
                            <img src={ListIcon} alt="" />
                            <NavText>Lists</NavText>
                        </NavPadding>
                        <NavPadding>
                            <BookmarkBorderOutlinedIcon sx={{ fontSize: "30px" }} />
                            <NavText>Bookmarks</NavText>
                        </NavPadding>
                        <NavPadding>
                            <TwitterIcon sx={{ fontSize: "30px" }} />
                            <NavText>Twitter Blue</NavText>
                        </NavPadding>
                        <NavPadding>
                            <PersonOutlineOutlinedIcon sx={{ fontSize: "30px" }} />
                            <NavText>Profile</NavText>
                        </NavPadding>
                        <NavPadding>
                            <img src={moreIcon} alt="" />
                            <NavText>More</NavText>
                        </NavPadding>
                        <NavTweet>
                            <NavText>Tweet</NavText>
                        </NavTweet>
                        <NavIcon>
                            <TwitterIcon sx={{ fontSize: "30px" }} />
                        </NavIcon>
                    </Stack>

                    <NavBtn
                        id="nav-btn"
                        aria-controls={open ? 'nav-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <NavMenu>
                            <Stack alignItems={"center"} direction={"row"} gap={1}>
                                <Avatar sx={{ bgcolor: "#1D9BF0" }} />
                                <Stack>
                                    <Typography fontWeight={"bold"}>Hello</Typography>
                                    <Typography>@hello</Typography>
                                </Stack>
                            </Stack>

                            <MoreHorizIcon />
                        </NavMenu>
                        <NavAvatar>
                            <Avatar sx={{ bgcolor: "#1D9BF0" }} />
                        </NavAvatar>
                    </NavBtn>
                    <Menu
                        id="nav-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'nav-btn',
                        }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}

                        PaperProps={{
                            style: {
                                maxWidth: "250px",
                                width: "100%",
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose} sx={{ fontWeight: 700, padding: "10px" }}>Log out @hello</MenuItem>
                    </Menu>

                </SideNavBox >
            </Box >
        </>
    )
}

export default SideNav
