import { Avatar, Box, Stack, Tooltip, Typography, styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IosShareRoundedIcon from '@mui/icons-material/IosShareRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import RepeatRoundedIcon from '@mui/icons-material/RepeatRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { format } from "date-fns"
import { dataObj } from '../redux/reducers/tweetReducer';

const TweetContent = styled(Box)({
    display: "flex",
    padding: "10px 20px",
    gap: "10px",
    borderBottom: "1px solid rgb(239, 243, 244)",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.05)"
    },
});
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

interface Props {
    tweets: dataObj;
}

const Tweets: React.FC<Props> = ({ tweets }) => {
    const { username, profileName, createdAt, tweet } = tweets;

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
                        <Tooltip title="More">
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
        </>
    )
}

export default Tweets
