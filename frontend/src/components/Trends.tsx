import { Avatar, Box, Stack, Typography, styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


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
    justifyContent: "space-between"
});

const TrendFollow = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
})



const Trends = () => {
    return (
        <Box flex={1}>
            <Box width={"100%"} maxWidth={"350px"} m={"0 auto"}>
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

                            <Box component={"button"}>Follow</Box>
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

                            <Box component={"button"}>Follow</Box>
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

                            <Box component={"button"}>Follow</Box>
                        </TrendFollow>
                    </TrendContent>
                    <TrendContent sx={{ borderBottomLeftRadius: "15px", borderBottomRightRadius: "15px" }}>
                        <Typography color={"#1D9BF0"} >Show more</Typography>
                    </TrendContent>
                </TrendTable>
            </Box>
        </Box>
    )
}

export default Trends
