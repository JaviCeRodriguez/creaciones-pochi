import React from "react";
import { Container } from "@chakra-ui/react";
import { StyledFooter } from "./index.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container maxW="container.xl">
                <p>Creado por Javo</p>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
