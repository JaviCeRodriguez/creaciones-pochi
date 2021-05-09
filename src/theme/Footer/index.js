import React from "react";
import { Container, Text, Link } from "@chakra-ui/react";
import { StyledFooter } from "./index.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <Container
                maxW="container.xl"
                height="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Text fontSize="xs">
                    Developed by{" "}
                    <Link
                        href="https://github.com/JaviCeRodriguez"
                        target="_blank"
                        style={{ textDecoration: "none" }}
                        fontWeight="bold"
                    >
                        Javier
                    </Link>
                </Text>
                <Text fontSize="xs">&nbsp;-&nbsp;Creaciones Pochi © 2021</Text>
            </Container>
        </StyledFooter>
    );
};

export default Footer;
