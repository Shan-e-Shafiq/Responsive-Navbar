import React from 'react'
import { Link, useLocation } from 'react-router-dom'


export default function NavItem(props) {

    const { label, route } = props
    const location = useLocation();

    return (
        <Link to={route}
            className={`text-md font-medium ${location.pathname == route ? "underline" : ""}`}
        >
            {label}
        </Link>
    )
}
