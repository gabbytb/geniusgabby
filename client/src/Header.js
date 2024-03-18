import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './assets/img/official.png';






export default function Header() {

    return (
        <>
        <header className="header d-flex border border-white border-top-0 border-bottom-1 border-left-0 border-right-0 fs-6 h-100">
            <nav className='navbar w-100 navbar-expand justify-space-between px-5'>

                <div className='navbar-nav h-100 mr-auto align-items-center'>
                    <Link to={"/"} className="navbar-brand d-flex py-0 mx-0 h-100 align-items-center">
                        <img src={logo} alt="logo" className="h-75"/>
                    </Link>
                </div>

                <div className="collapse navbar-collapse align-items-center justify-content-center">
                    <ul className="navbar-nav mr-auto h-100 column-gap-3">
                        <li className='nav-item'>
                            <NavLink to={"/user/login"} className="text-decoration-none text-dark">Log in</NavLink>
                        </li>
                    </ul>
                </div>

            </nav>
        </header>
        </>
    )
}