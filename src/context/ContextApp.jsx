import React, { createContext, useEffect, useState } from "react";

export const ContextApp = createContext([]);
export const ContextAppProvider = (props) => {
    const [games, setGames] = useState("hola Mundo")

    useEffect(() => {
        async function fetchGames() {
            const response = await fetch("http://localhost:3000/api/products", {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Content-Type": "application/json",
                }
            })
            const data = await response.json()
            setGames(data)
        }
        fetchGames();
    }, [])
    return <ContextApp.Provider value={{ games, setGames }}>
        {props.children}
    </ContextApp.Provider>
}