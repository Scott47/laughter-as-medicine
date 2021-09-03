import { useState, useEffect } from "react"
import { getNotFunnyJokes } from "../data/ApiManager"
import "./Joke.css"


export const NotFunnyToMe = () => {
    const [notFunnyJokes, setNotFunnyJokes] = useState([])

    useEffect(() => getNotFunnyJokes().then(setNotFunnyJokes), [])

    return (
        <>
        <h2>Not so Funny Jokes</h2>
            {
                notFunnyJokes.map(joke => 
                <div key={joke.id}>
                    <p className="setup">{joke.setup}</p>
                    <p className="punchline">{joke.punchline}</p>
                </div>
                )
            }
        </>
    )
}