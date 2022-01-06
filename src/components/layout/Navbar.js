import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar bg-primary'>
            <h1> React Project </h1>
            <ul>
                <li>
                    <Link to="/">Task 1</Link>
                </li>
                <li>
                    <Link to="/task2">Task 2</Link>
                </li>
                <li>
                    <Link to="/task3">Task 3</Link>
                </li>
            </ul>
        </nav>
    )
}


export default Navbar;