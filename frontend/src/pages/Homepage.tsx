import { Box, styled } from "@mui/material"
import SideNav from "../components/SideNav"
import Home from "../components/Home"
import Trends from "../components/Trends"
import Message from "../components/Message"

const HomepageBox = styled(Box)({
  display: "flex",
  gap: "10px"
})

const Homepage = () => {
  return (
    <>
      <HomepageBox>
        <SideNav />
        <Home />
        <Trends />
        <Message />
      </HomepageBox>
    </>
  )
}

export default Homepage
