import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const MainView = lazy(() => import('./views/mainView'))

function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Switch>
                    <Route exact path="/" component={MainView} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}

export default App
