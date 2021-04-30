import React from "react";
import GlobalStyle from "./globalStyles";
import StyledTheme from "./index.styled";
import Nav from "./Nav";
import Footer from "./Footer";
import { Container } from "@chakra-ui/react";

const Theme = ({ children }) => {
    return (
        <StyledTheme>
            <GlobalStyle />
            <Nav />
            <Container maxW="container.xl">{children}</Container>
            <Footer />
        </StyledTheme>
    );
};

export default Theme;
