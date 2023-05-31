import { Box, Stack, Typography, styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

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

interface Props {
    trend: string;
    tweets: string;
    about: string;
}

const TrendContents: React.FC<Props> = ({ trend, tweets, about }) => {
    return (
        <TrendContent>
            <Trending>
                <Stack>
                    <Typography fontSize={"13px"}>{trend}</Typography>
                    <Typography fontWeight={700}>{about}</Typography>
                    <Typography fontSize={"13px"}>{tweets} Tweets</Typography>
                </Stack>

                <MoreHorizIcon />
            </Trending>
        </TrendContent>
    )
}

export default TrendContents
