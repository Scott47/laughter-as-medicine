import { useState, useEffect } from "react"


export const FunnyToMe = () => {
    const [funnyJokes, setFunnyJokes] = useState([])

    const getJokes = () => {
        return fetch("http://localhost:8080/funnytome")
            .then(jk => jk.json())
            .then(setFunnyJokes)
    }

    useEffect(() => getJokes(), [])

    return (
        <>
        <h2>Funny Jokes</h2>

            {
                funnyJokes.map(joke => <div key={joke.id}><p >{joke.setup}</p><p>{joke.punchline}</p></div>)
            }
        </>
    )
}