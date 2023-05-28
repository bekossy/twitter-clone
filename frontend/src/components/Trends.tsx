import {
    Avatar,
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
    Typography,
    styled,
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const SearchBox = styled(Box)({
    position: "sticky",
    top: "0",
    zIndex: 10,
    padding: "5px 0",
    backgroundColor: "#fff"
})
const SearchField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: "20px",
        height: "45px",
        backgroundColor: "rgba(0,0,0,0.03)",
        '& fieldset': {
            border: "none"
        },
        '&.Mui-focused fieldset': {
            border: '2px solid #1D9BF0',
        },
    },
})
const TrendBox = styled(Box)(({ theme }) => ({
    width: "100%",
    flex: 1,
    maxWidth: "350px",
    m: "0 auto",
    minHeight: "250vh",
    [theme.breakpoints.down("lg")]: {
        display: "none"
    }
}))
const TrendTable = styled(Box)({
    backgroundColor: "rgba(0,0,0,0.03)",
    borderRadius: "15px",
    margin: "15px 0",
});
const TrendText = styled(Box)({
    padding: "10px 20px",
})
const TrendContent = styled(Box)({
    padding: "10px 20px",
    cursor: "pointer",
    "&:hover": {
        backgroundColor: "rgba(0,0,0,0.05)"
    }
});
const Trending = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    color: "#536471",
    "& div p:nth-of-type(2)": {
        color: "#0f1419"
    }
});
const TrendFollow = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
})
const FollowBtn = styled(Button)({
    color: "#fff",
    backgroundColor: "#000",
    padding: "5px 20px",
    borderRadius: "25px",
    fontSize: "14px",
    textTransform: "capitalize",
    "&:hover": {
        backgroundColor: "#222"
    }
});
const TrendLinks = styled(Box)({
    display: "flex",
    margin: "20px auto",
    flexWrap: "wrap"
})
const TrendLink = styled(Typography)({
    color: "#536471",
    cursor: "pointer",
    padding: "1px 5px",
    fontSize: "14px",
    fontWeight: 400,
    "&:hover": {
        textDecoration: "underline"
    },
    "&:last-of-type": {
        cursor: "text",
        textDecoration: "none"
    }
})

const Trends = () => {
    return (
        <TrendBox>
            <SearchBox>
                <SearchField
                    fullWidth
                    placeholder='Search'
                    type='text'
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            <SearchOutlinedIcon />
                        </InputAdornment>,
                    }}
                />
            </SearchBox>
            <TrendTable>
                <TrendText>
                    <Typography fontSize={"22px"} fontWeight={700}>Trends for you</Typography>
                </TrendText>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent>
                    <Trending>
                        <Stack>
                            <Typography fontSize={"13px"}>Trending in your country</Typography>
                            <Typography fontWeight={700}>Hello World</Typography>
                            <Typography fontSize={"13px"}>25.1k Tweets</Typography>
                        </Stack>

                        <MoreHorizIcon />
                    </Trending>
                </TrendContent>
                <TrendContent sx={{ borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
                    <Typography color={"#1D9BF0"} >Show more</Typography>
                </TrendContent>
            </TrendTable>

            <TrendTable>
                <TrendText>
                    <Typography fontSize={"22px"} fontWeight={700}>Who to follow</Typography>
                </TrendText>
                <TrendContent>
                    <TrendFollow>
                        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                            <Avatar />
                            <Stack>
                                <Typography fontSize={"14px"} fontWeight={"bold"}>hello</Typography>
                                <Typography fontSize={"14px"}>hello</Typography>
                            </Stack>
                        </Stack>

                        <FollowBtn>Follow</FollowBtn>
                    </TrendFollow>
                </TrendContent>
                <TrendContent>
                    <TrendFollow>
                        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                            <Avatar />
                            <Stack>
                                <Typography fontWeight={"bold"}>hello</Typography>
                                <Typography>hello</Typography>
                            </Stack>
                        </Stack>

                        <FollowBtn>Follow</FollowBtn>
                    </TrendFollow>
                </TrendContent>
                <TrendContent>
                    <TrendFollow>
                        <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                            <Avatar />
                            <Stack>
                                <Typography fontSize={"14px"} fontWeight={"bold"}>hello</Typography>
                                <Typography fontSize={"14px"}>hello</Typography>
                            </Stack>
                        </Stack>

                        <FollowBtn>Follow</FollowBtn>
                    </TrendFollow>
                </TrendContent>
                <TrendContent sx={{ borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
                    <Typography color={"#1D9BF0"} >Show more</Typography>
                </TrendContent>
            </TrendTable>

            <TrendLinks>
                <TrendLink>Terms of Service</TrendLink>
                <TrendLink>Privacy Policy</TrendLink>
                <TrendLink>Cookie Policy</TrendLink>
                <TrendLink>Accessibility</TrendLink>
                <TrendLink>Ads info</TrendLink>
                <TrendLink>More...</TrendLink>
                <TrendLink>&copy; 2023 X Corp.</TrendLink>
            </TrendLinks>
        </TrendBox>
    )
}

export default Trends
