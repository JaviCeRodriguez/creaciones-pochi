import React from "react";
import useGoogleSheets from 'use-google-sheets';
import { StyledHome } from "./index.styled.js";


const Home = () => {
    const { data, loading, error } = useGoogleSheets({
        apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
        sheetId: process.env.REACT_APP_GOOGLE_SHEETS_ID,
        sheetsNames: ['Hoja'],
    });
    
    if (loading) {
        return <StyledHome>Esperando...</StyledHome>;
    }
    
    if (error) {
        return <StyledHome>Error :(</StyledHome>;
    }

    const products = data[0].data

    return (
        <StyledHome>
            <ul>
                {
                    products.map((p, key) => {
                        return <li key={key}><b>{p.Product}</b>: {p.Stock}</li>
                    })
                }
            </ul>
        </StyledHome>
    )
};

export default Home;
