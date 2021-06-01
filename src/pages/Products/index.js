import React from "react";
import Card from "../../components/Card";
import { StyledProducts } from "./index.styled";
import { prods } from './data'

const Products = () => {
    return (
        <StyledProducts>
            {prods.map((p, key) => {
                return(
                    <Card p={p} key={key}/>
                )
            })}
        </StyledProducts>
    );
};

export default Products;
