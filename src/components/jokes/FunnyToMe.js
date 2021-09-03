import { useState, useEffect } from "react"
import { getFunnyJokes } from '../data/ApiManager'


export const FunnyToMe = () => {
    const [funnyJokes, setFunnyJokes] = useState([])

    

    useEffect(() => getFunnyJokes().then(setFunnyJokes), [])

    return (
        <>
        <h2>Funny Jokes</h2>

            {
                funnyJokes.map(joke => <div key={joke.id}><p className="setup">{joke.setup}</p><p className="punchline">{joke.punchline}</p></div>)
            }
        </>
    )
}