import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { StyledAbout } from "./index.styled.js";
import Foto from "../../assets/img/foto_home.jpg";

const About = () => {
    return (
        <StyledAbout>
            <Box boxSize="18rem" px="4" mb="8">
                <Box
                    mb="1"
                    fontSize="xl"
                    fontWeight="bold"
                    as="h1"
                    lineHeight="tight"
                    textAlign="center"
                    textTransform="uppercase"
                >
                    Sobre mí
                </Box>
                <Image src={Foto} alt="Graciela" />
            </Box>
            <Box p="4" fontWeight="semibold" as="p" lineHeight="tight">
                Detrás de <b>Creaciones Pochi</b>, está Graciela. Es una persona
                que, a través de la elaboración de artesanías, transmite sus
                sentimientos y ganas por satisfacer las expectativas de los
                demás.
            </Box>
        </StyledAbout>
    );
};

export default About;
