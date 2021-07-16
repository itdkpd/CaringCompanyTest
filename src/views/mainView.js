import React, { Suspense, lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Headers = lazy(() => import('./layouts/header'))
const SideMenu = lazy(() => import('./layouts/sideMenu'))
// const Home = lazy(() => import('./modules/home/home'))

function MainView() {
    return (
        <div className="main-containers">
            <Suspense fallback={<></>}>
                <Headers />
                <SideMenu />
                <div className="main">
                    <div className="app-container">
                        hello
                        {/* <Route exact path="/home" component={Home} /> */}
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default MainView
