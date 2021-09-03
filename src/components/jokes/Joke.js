import React, { useState, useEffect } from "react";
import { getJoke,
    getFunnyJokes,
    getNotFunnyJokes,
    sendFunnyToMe,
    sendNotFunnyToMe } from "../data/ApiManager";
import "./Joke.css"

export const Joke = () => {
    const [newJoke, setNewJoke] = useState({})
    const [notFunnyJokes, setNotFunnyJokes] = useState([])
    const [funnyJokes, setFunnyJokes] = useState([])
    const [funnyCount, setFunnyCount] = useState(0)
    const [notFunnyCount, setNotFunnyCount] = useState(0)

    useEffect(() => {
        getJoke().then((j) => setNewJoke(j))
        getFunnyJokes().then((nfj => setFunnyJokes(nfj)))
        getNotFunnyJokes().then((fj) => setNotFunnyJokes(fj))
    }, [])


    useEffect(() => funnyJokes.length !== 0 ?
        setFunnyCount(funnyJokes.length)
        : setFunnyCount(0),
        [funnyJokes]
    )

    useEffect(() => notFunnyJokes.length !== 0 ?
        setNotFunnyCount(notFunnyJokes.length)
        : setNotFunnyCount(0),
        [notFunnyJokes]
    )

    return (
        <>
            <header className="LaughApp-header">
                <h1>Let's Laugh😆...or not 😩</h1>
            </header>
            <div>
                <p>{newJoke.setup}</p>
                <p>{newJoke.punchline}</p>
            </div>
            <div className="button-count">
                <button onClick={() => {
                    const thisJoke = {
                        punchline: newJoke.punchline,
                        setup: newJoke.setup,
                        type: newJoke.type
                    }
                    sendFunnyToMe(thisJoke).then(() => getFunnyJokes().then(setFunnyJokes))
                }}>Funny To Me
                </button>
                <div className="count">{funnyCount} jokes</div>
            </div>
            <div className="button-count">
                <button onClick={() => {
                    const thisJoke = {
                        punchline: newJoke.punchline,
                        setup: newJoke.setup,
                        type: newJoke.type
                    }
                    sendNotFunnyToMe(thisJoke).then(() => getNotFunnyJokes().then(setNotFunnyJokes))
                }}>Not Funny To Me</button>
                <div className="count">{notFunnyCount} jokes</div>
            </div>
        </>
    )
}