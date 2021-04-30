import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    height: 3rem;
    background-color: #006ecd;
    color: white;
`;

export const StyledWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    h1 {
        font-family: "Lobster", cursive;
        text-shadow: 3px 3px #444;
        font-size: 1.2rem;
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 9.5rem;
        height: 100%;
    }
`;
