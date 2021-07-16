import React, { Suspense, lazy } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const Headers = lazy(() => import('./layouts/header'))
const SideMenu = lazy(() => import('./layouts/sideMenu'))
const Scheduler = lazy(() => import('./modules/scheduler/scheduler'))

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
    },
}));

function MainView() {
    return (
        <div className="main-container">
            <Suspense fallback={<></>}>
                <Headers />
                <SideMenu />
                <Scheduler />
            </Suspense>
        </div>
    )
}

export default MainView
