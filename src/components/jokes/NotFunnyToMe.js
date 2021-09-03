import { useState, useEffect } from "react"


export const NotFunnyToMe = () => {
    const [notFunnyJokes, setNotFunnyJokes] = useState([])

    const getJokes = () => {
        return fetch("http://localhost:8088/notfunnytome")
            .then(jk => jk.json())
            .then(setNotFunnyJokes)
    }

    useEffect(() => getJokes(), [])

    return (
        <>
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