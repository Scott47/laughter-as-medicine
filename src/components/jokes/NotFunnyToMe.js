import { useState, useEffect } from "react"


export const NotFunnyToMe = () => {
    const [notFunnyJokes, setNotFunnyJokes] = useState([])

    const getJokes = () => {
        return fetch("http://localhost:8080/notfunnytome")
            .then(jk => jk.json())
            .then(setNotFunnyJokes)
    }

    useEffect(() => getJokes(), [])

    return (
        <>
        <h2>Not so Funny Jokes</h2>
            {
                notFunnyJokes.map(joke => 
                <div key={joke.id}>
                    <p>{joke.setup}</p>
                    <p>{joke.punchline}</p>
                </div>
                )
            }
        </>
    )
}