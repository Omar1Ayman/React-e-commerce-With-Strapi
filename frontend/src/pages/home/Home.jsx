import React from "react";
import Hero from "../../components/hero/Hero";
import { Container, Box } from "@mui/material";
import { useTheme } from "@emotion/react";
import Products from "../../components/main/Products";
import Footer from "../../components/footer/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  const theme = useTheme();
  return (
    <Box bgcolor={theme.palette.bg.main}>
      <Container sx={{ mt: 2 }}>
        <Hero />
        <Products />
      </Container>
      <ScrollToTop />
    </Box>
  );
};

export default Home;
