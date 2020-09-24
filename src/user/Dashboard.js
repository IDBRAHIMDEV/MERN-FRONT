import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Layout from './../core/Layout'

import { isAuthenticated } from './../auth/helpers'

function Dashboard() {

    const { user: { name, email, role } } = isAuthenticated()


    const userInfo = () => {

        return (

            <div className="card">
                            <div className="card-body">
                                <h2 className="card-header">User INFORMATION</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{name}</li>
                                    <li className="list-group-item">{email}</li>
                                    <li className="list-group-item">{role ? 'Admin' : 'User'}</li>
                                </ul>
                            </div>
                        </div>
        )
    }

    const purshaseHistory = () => {

        return (
            <div className="card">
                            <div className="card-body">
                                <h2 className="card-header">Purshase HISTORY</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">History</li>
                                  
                                </ul>
                            </div>
                        </div>
        )
    }

    const userLinks = () => {

        return (
            <div className="card">
                            <div className="card-body">
                                <h2 className="card-header">User Links</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/cart">My Cart</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/profile">Profile</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
        )
    }

    return (
        <Fragment>
            <Layout
                title="Dashboard"
                description={`Welcome, ${ name }`}
                className="container"
            >

                <div className="row">
                    <div className="col-md-3">
                        {userLinks()}
                    </div>
                    <div className="col-md-9">
                        {userInfo()}
                        <hr/>
                        {purshaseHistory()}
                    </div>

                 
                </div>

            </Layout>
        </Fragment>
    )
}

export default Dashboard
