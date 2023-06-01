import { Avatar, Box, Menu, MenuItem, Stack, Tooltip, Typography, styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { format } from "date-fns"
import { dataObj } from '../redux/reducers/tweetReducer';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useState } from 'react';

const TweetContent = styled(Box)(({ theme }) => ({
    display: "flex",
    padding: "10px 20px",
    gap: "10px",
    borderBottom: "1px solid rgb(239, 243, 244)",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.05)"
    },
    [theme.breakpoints.down("sm")]: {
        padding: "10px 10px"
    }
}));
const IconContainer = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    gap: "5px",
    color: "#536471",
    "& p": {
        fontSize: "14px",
    },
    "&:hover": {
        color: "#1d9bf0"
    },
    "& svg": {
        borderRadius: "50%",
        padding: "5px",
        fontSize: "30px",
        "&:hover": {
            backgroundColor: "rgba(13, 134, 214, 0.2)",
            color: "#1d9bf0"
        }
    },
});
const TweetTitle = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#536471",
    "& p": {
        fontSize: "15px",
    },
    "& svg": {
        borderRadius: "50%",
        padding: "5px",
        fontSize: "30px",
        "&:hover": {
            backgroundColor: "rgba(13, 134, 214, 0.2)",
            color: "#1d9bf0"
        }
    },
});
const Items = styled(MenuItem)({
    display: "flex",
    gap: "5px",
    padding: "6px",
    fontWeight: 600,
    "& p": {
        fontSize: "14px"
    }
})

interface Props {
    tweets: dataObj;
    handleDelete: (id: string) => Promise<void>
}

const Tweets: React.FC<Props> = ({ tweets, handleDelete }) => {
    const { username, profileName, createdAt, tweet, _id } = tweets;
    const { user } = useSelector((state: RootState) => state.auth);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const date: Date = new Date(createdAt);
    const dateFormat: string = format(date, 'MMMM d');

    return (
        <>
            <TweetContent>
                <Avatar />

                <Box flex={1}>
                    <TweetTitle>
                        <Stack direction={"row"} alignItems={"center"} gap={"3px"}>
                            <Typography fontWeight={"bold"} color={"#000!important"}>{profileName}</Typography>
                            <Typography>@{username}</Typography>
                            <Typography>{dateFormat}</Typography>
                        </Stack>
                        <Tooltip
                            title="More"
                            id="nav-btn"
                            aria-controls={open ? 'nav-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </Tooltip>
                    </TweetTitle>

                    <Typography mb={"10px"}>{tweet}</Typography>

                    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-evenly"}>
                        <Tooltip title="Reply" placement="bottom-start">
                            <IconContainer>
                                <ChatBubbleOutlineRoundedIcon />
                                <Typography>2000</Typography>
                            </IconContainer>
                        </Tooltip>
                        <Tooltip title="Retweet" placement="bottom-start">
                            <IconContainer sx={{
                                "&:hover": { color: "rgb(14, 150, 14)!important" },
                                "& svg:hover": { backgroundColor: "rgba(14, 150, 14, 0.2)!important", color: "rgb(14, 150, 14)!important" }
                            }}
                            >
                                <RepeatRoundedIcon />
                                <Typography>2000</Typography>
                            </IconContainer>
                        </Tooltip>
                        <Tooltip title="Like" placement="bottom-start">
                            <IconContainer sx={{
                                "&:hover": { color: "rgb(216, 64, 64)!important" },
                                "& svg:hover": { backgroundColor: "rgba(187, 38, 38, 0.2)!important", color: "rgb(216, 64, 64)!important" }
                            }}

                            >
                                <FavoriteBorderRoundedIcon />
                                <Typography>2000</Typography>
                            </IconContainer>
                        </Tooltip>
                        <Tooltip title="View" placement="bottom-start">
                            <IconContainer>
                                <BarChartRoundedIcon />
                                <Typography>2000</Typography>
                            </IconContainer>
                        </Tooltip>
                        <Tooltip title="Share" placement="bottom-start">
                            <IconContainer>
                                <IosShareRoundedIcon />
                            </IconContainer>
                        </Tooltip>
                    </Stack>
                </Box>
            </TweetContent>
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
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}

                PaperProps={{
                    style: {
                        maxWidth: "150px",
                        width: "100%",
                    },
                }}
            >
                {
                    username === user.username ? (

                        <Box>
                            <Items onClick={() => handleDelete(_id)}>
                                <DeleteOutlineOutlinedIcon fontSize='small' />
                                <Typography>Delete</Typography>
                            </Items>
                            <Items onClick={() => console.log("Edit")}>
                                <BorderColorOutlinedIcon fontSize='small' />
                                <Typography>Edit</Typography>
                            </Items>
                        </Box>
                    ) : (
                        <Items disabled={true}>
                            <VisibilityRoundedIcon fontSize='small' />
                            <Typography>{username}'s tweet</Typography>
                        </Items>
                    )
                }
            </Menu>
        </>
    )
}

export default Tweets
