import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
    const [games, setGames] = useState([])

    useEffect(() => {
        async function fetchGames() {
            const response = await fetch("http://localhost:3030/api/products/", {
                /* headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json"
                } */
            })
            const data = await response
            setGames(data)
        }
        fetchGames();
    }, [])
    return <ContextApp.Provider value={{ games, setGames }}>
        {props.children}
    </ContextApp.Provider>
}