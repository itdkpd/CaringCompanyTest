/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState, useContext, useLayoutEffect } from 'react'
import moment from 'moment'
import Clock from 'react-live-clock'
import ReactDOM from 'react-dom'

function Header() {
    useLayoutEffect(() => {
        ReactDOM.render(
            <Clock format="LTS" ticking timezone="Asia/Manila" />,
            document.getElementById('app-time'),
        )
    }, [])

    return (
        <div className="header">
            <h1>Trade Finance System</h1>
            <div id="app-header-nav">
                <span id="app-user-details">
                    <span id="app-date-time">
                        <span id="app-date">
                            Today is {moment(new Date()).format('dddd LL')}
                        </span>
                        &nbsp;
                        <span id="app-time" />
                    </span>
                    <span id="app-logout">
                        <span>Logout</span>
                    </span>
                </span>
            </div>
        </div>
    )
}

export default Header
