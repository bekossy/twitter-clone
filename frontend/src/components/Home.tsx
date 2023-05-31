import { Avatar, Box, Button, CircularProgress, Stack, TextField, Tooltip, Typography, styled } from '@mui/material';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import SentimentSatisfiedAltRoundedIcon from '@mui/icons-material/SentimentSatisfiedAltRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useEffect, useState } from 'react';
import Tweets from './Tweets';
import { useSelector, useDispatch } from 'react-redux';
import { getTweets, postTweets } from '../redux/actions/tweetAction';
import { RootState } from '../redux/store';

const HomeBox = styled(Box)({
    flex: 2,
    borderLeft: "1px solid rgb(239, 243, 244)",
    borderRight: "1px solid rgb(239, 243, 244)",
})
const HomeTitle = styled(Box)(({ theme }) => ({
    position: "sticky",
    top: 0,
    backdropFilter: "blur(12px)",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderBottom: "1px solid rgb(239, 243, 244)",
    zIndex: 10,
    "& h1": {
        fontWeight: 600,
        padding: "10px 20px",
        textAlign: "left"
    },
    "& svg": {
        display: "none",
        margin: "10px 0",
        color: "#1D9BF0",
        cursor: "pointer",
    },
    [theme.breakpoints.down("sm")]: {
        "& > span": {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        },
        "& h1": {
            display: "none"
        },
        "& svg": {
            display: "block"
        },
    }
}));
const HomeTitleOpts = styled(Box)({
    display: "flex",
    alignItems: "center",
});
const HomeTitleOpt = styled(Box)({
    flex: 1,
    padding: "20px 0",
    fontSize: "16px",
    fontWeight: 600,
    textAlign: "center",
    cursor: "pointer",
    position: "relative",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)"
    },
    "&:last-of-type": {
        color: "#536471",
        fontWeight: 400,
    }
});
const HomeContent = styled(Box)({
    display: "flex",
    padding: "10px 20px",
    gap: "10px",
    borderBottom: "1px solid rgb(239, 243, 244)",
});
const TweetField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        backgroundColor: "#fff",
        fontSize: "20px",
        padding: "0",
        color: "#536471",
        borderBottom: "1px solid rgb(239, 243, 244)",
        '& fieldset': {
            border: "none"
        },
        "& ::placeholder": {
            color: "#000",
            fontSize: "22px"
        }
    },

})
const TweetBtns = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "5px 10px 0",
    "& button": {
        backgroundColor: "#1d9bf0",
        color: "#fff",
        padding: "5px 17px",
        borderRadius: "25px",
        fontSize: "16px",
        textTransform: "capitalize",
        fontWeight: 600,
    },
    "& button:hover": {
        backgroundColor: "#0d86d6"
    },
    "& button:disabled": {
        backgroundColor: "rgba(13, 134, 214, 0.4)",
        color: "#fff"
    },
    "& svg": {
        color: "#1d9bf0",
        borderRadius: "50%",
        fontSize: "30px",
        padding: "5px",
        cursor: "pointer",
        "&:hover": {
            backgroundColor: "rgba(13, 134, 214, 0.2)"
        }
    }
});
const Mssg = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "300px",
    color: "#536471"
})

const Home = () => {
    const [tweet, setTweet] = useState("");
    const dispatch = useDispatch();
    const { loading, error, data } = useSelector((state: RootState) => state.getTweets);
    const { user } = useSelector((state: RootState) => state.auth);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(postTweets(tweet))
        setTweet("")
    }

    useEffect(() => {
        if (user) {
            dispatch(getTweets());
        }
    }, [dispatch, user]);

    return (
        <HomeBox flex={2}>
            <HomeTitle>
                <Box component={"span"}>
                    <Typography variant='h6' component={"h1"}>Home</Typography>
                    <TwitterIcon fontSize='large' />
                </Box>

                <HomeTitleOpts>
                    <HomeTitleOpt>For you <Box position={"absolute"} left={"40%"} bottom={-3} borderRadius={"20px"} width={"60px"} height={"5px"} bgcolor={"#1d9bf0"} ></Box></HomeTitleOpt>
                    <HomeTitleOpt>Following</HomeTitleOpt>
                </HomeTitleOpts>
            </HomeTitle>
            <HomeContent>
                <Avatar />
                <Box component={"form"} flex={1} onSubmit={handleSubmit}>
                    <TweetField
                        placeholder='What is happening?!'
                        fullWidth
                        value={tweet}
                        onChange={(e) => setTweet(e.target.value)}
                    />
                    <TweetBtns>
                        <Stack direction={"row"} gap={"5px"}>
                            <Tooltip title="Media">
                                <ImageOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="GIF">
                                <GifBoxOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Poll">
                                <ChecklistRoundedIcon />
                            </Tooltip>
                            <Tooltip title="Emoji">
                                <SentimentSatisfiedAltRoundedIcon />
                            </Tooltip>
                            <Tooltip title="Schedule">
                                <EventAvailableOutlinedIcon />
                            </Tooltip>
                            <Tooltip title="Location">
                                <PlaceOutlinedIcon />
                            </Tooltip>
                        </Stack>

                        <Button type='submit' disabled={Boolean(!tweet)}>Tweet</Button>
                    </TweetBtns>
                </Box>
            </HomeContent>

            {loading ? (
                <Mssg>
                    <CircularProgress />
                </Mssg>
            ) : error ? (
                <Mssg>{error}</Mssg>
            ) : (
                data.length ? (
                    data.map((tweet) => (
                        <Tweets
                            key={tweet._id}
                            tweets={tweet}
                        />
                    ))
                ) : (
                    <Mssg>
                        <Typography>No tweets, be the first!</Typography>
                    </Mssg >
                )
            )}

        </HomeBox>
    )
}

export default Home
