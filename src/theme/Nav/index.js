import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link, Container } from "@chakra-ui/react";
import LinkNav from "./LinkNav";
import { StyledNav, StyledWrapper } from "./index.styled";
import { items } from "./items";

const Nav = () => {
    return (
        <Router>
            <StyledNav>
                <Container maxW="container.xl" height="100%">
                    <StyledWrapper>
                        <Link href="/" _hover={{ textDecoration: "none" }}>
                            <h1>Creaciones Pochi</h1>
                        </Link>

                        <ul>
                            {items.map(({ href, text }, key) => (
                                <li key={key}>
                                    <LinkNav href={href} text={text} />
                                </li>
                            ))}
                        </ul>
                    </StyledWrapper>
                </Container>
            </StyledNav>
        </Router>
    );
};

export default Nav;
