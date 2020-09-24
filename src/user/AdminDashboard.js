import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Layout from './../core/Layout'

import { isAuthenticated } from './../auth/helpers'

function AdminDashboard() {

    const { user: { name, email, role } } = isAuthenticated()


    const adminInfo = () => {

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


    const adminLinks = () => {

        return (
            <div className="card">
                            <div className="card-body">
                                <h2 className="card-header">User Links</h2>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/category/create">Create category</Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link className="nav-link" to="/product/create">Create product</Link>
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
                    <div className="col-md-4">
                        {adminLinks()}
                    </div>
                    <div className="col-md-8">
                        {adminInfo()}
                       
                    </div>

                 
                </div>

            </Layout>
        </Fragment>
    )
}

export default AdminDashboard
