import { Box, styled } from "@mui/material"
import SideNav from "../components/SideNav"
import Home from "../components/Home"
import Trends from "../components/Trends"

const HomepageBox = styled(Box)({
  maxWidth: "1300px",
  width: "100%",
  margin: "0 auto",
  display: "flex"
})

const Homepage = () => {
  return (
    <>
      <HomepageBox>
        <SideNav />
        <Home />
        <Trends />
      </HomepageBox>
    </>
  )
}

export default Homepage
