import React, { useState, useEffect } from "react";

export const Joke = () => {
    const [newJoke, setNewJoke] = useState({})
    const [notFunnyJokes, setNotFunnyJokes] = useState([])
    const [funnyJokes, setFunnyJokes] = useState([])
    const [funnyCount, setFunnyCount] = useState(0)
    const [notFunnyCount, setNotFunnyCount] = useState(0)


    const getJoke = () => {
        return fetch("https://official-joke-api.appspot.com/random_joke")
            .then(jk => jk.json())
            .then(setNewJoke)
    }

    const getFunnyJokes = () => {
        return fetch("http://localhost:8080/funnytome")
            .then(jk => jk.json())
            .then(setFunnyJokes)
    }
    const getNotFunnyJokes = () => {
        return fetch("http://localhost:8080/notfunnytome")
            .then(jk => jk.json())
            .then(setNotFunnyJokes)
    }

    const sendToFunnyToMe = (jokeObj) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jokeObj)
        }
        return fetch(`http://localhost:8080/funnytome`, fetchOptions)
            .then(jk => jk.json())
            .then(getFunnyJokes)
    }

    const sendToNotFunnyToMe = (jokeObj) => {
        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jokeObj)
        }
        return fetch(`http://localhost:8080/notfunnytome`, fetchOptions)
            .then(jk => jk.json())
            .then(getNotFunnyJokes)

    }

    useEffect(() => {
        getJoke()
        getFunnyJokes()
        getNotFunnyJokes()
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
            <button onClick={() => {
                const thisJoke = {
                    punchline: newJoke.punchline,
                    setup: newJoke.setup,
                    type: newJoke.type
                }
                sendToFunnyToMe(thisJoke)
            }}>Funny To Me
            </button>
            <div>Count: {funnyCount}</div>
            <button onClick={() => {
                const thisJoke = {
                    punchline: newJoke.punchline,
                    setup: newJoke.setup,
                    type: newJoke.type
                }
                sendToNotFunnyToMe(thisJoke)
            }}>Not Funny To Me</button>
            <div>Count: {notFunnyCount}</div>

        </>
    )
}