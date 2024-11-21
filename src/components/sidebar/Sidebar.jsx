import React from 'react';
import { Link } from 'react-router-dom';
//import SidebarHeader from './SidebarHeader';

const sidebarLinks = [
    { to: '/', label: 'Assignment1' },
    { to: '/Assignment2', label: 'Assignment2' },
    { to: '/Assignment3', label: 'Assignment3' },
];
const Sidebar = () => {
    return (
   <>
            <button className='d-lg-none' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-expanded="true" aria-controls="navbarNav">
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='float-start sidebarMain' id='navbarNav' >


                <ul className='m-0 p-0' >
                    {sidebarLinks.map((link, index) => (
                        <li key={index} className='py-3 text-center px-3'>
                            <Link to={link.to}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

            </div>
            </>
    )
}

export default Sidebar