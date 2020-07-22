import React from 'react'
import Navbar from './Navbar'
import Routes from '../../routes/index'

export default function Layout() {
    return (
        <main role="main">
            <Navbar />
            <div className="container">
                <div className="row">
                    <Routes />
                </div>
            </div>
        </main>
    )
}
