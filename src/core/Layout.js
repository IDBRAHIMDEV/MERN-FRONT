import React from 'react'

const Layout = ({ title, description, className, children }) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">{title}</h1>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>
                {children}
            </div>
        </div>
    )
}

export default Layout
