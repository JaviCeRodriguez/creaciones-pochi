import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 0.01rem solid #ccc;
    border-radius: 0.5rem;
    overflow: hidden;
    margin: 0.5rem;
    width: 18rem;
    max-width: 18rem;
    height: 22rem;
    background-color: white;
    box-shadow: 0.2rem .3rem 0rem -0.1rem #2e2e2e;
`;

export const StyledInfo = styled.div`
    padding: 0.3rem;

    h3 {
        font-weight: 600;
        font-size: 1.1rem;
    }

    h4 {
        font-weight: 600;
        font-size: 0.9rem;
        color: #777;
    }
`
