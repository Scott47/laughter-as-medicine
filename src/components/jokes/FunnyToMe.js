import { useState, useEffect } from "react"


export const FunnyToMe = () => {
    const [funnyJokes, setFunnyJokes] = useState([])

    const getJokes = () => {
        return fetch("http://localhost:8088/funnytome")
            .then(jk => jk.json())
            .then(setFunnyJokes)
    }

    useEffect(() => getJokes(), [])

    return (
        <>
            {
                funnyJokes.map(joke => <p key={joke.id}>{joke.setup}<p>{joke.punchline}</p></p>)
            }
        </>
    )
}