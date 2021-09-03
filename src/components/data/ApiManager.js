

export const getJoke = () => {
    return fetch("https://official-joke-api.appspot.com/random_joke")
        .then(jk => jk.json())
}

export const getFunnyJokes = () => {
    return fetch("http://localhost:8080/funnytome")
        .then(jk => jk.json())
}

export const getNotFunnyJokes = () => {
    return fetch("http://localhost:8080/notfunnytome")
        .then(jk => jk.json())
}

export const sendFunnyToMe = (jokeObj) => {

    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    }
    return fetch(`http://localhost:8080/funnytome`, fetchOptions)
        .then(jk => jk.json())
}

export const sendNotFunnyToMe = (jokeObj) => {
    
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    }
    return fetch(`http://localhost:8080/notfunnytome`, fetchOptions)
        .then(jk => jk.json())

}
