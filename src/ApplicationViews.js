import React from "react"
import { Route } from "react-router-dom"
import { FunnyToMe } from "./components/jokes/FunnyToMe"
import { Joke } from "./components/jokes/Joke"
import { NotFunnyToMe } from "./components/jokes/NotFunnyToMe"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <Joke />
            </Route>

            <Route exact path="/funnytome">
                <FunnyToMe />
            </Route>

            <Route path="/notfunnytome">
                <NotFunnyToMe />
            </Route>


        </>
    )
}