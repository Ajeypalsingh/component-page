import React from 'react'

import '../assets/style/index.css'
import Button from './Button';


function Header() {
    return (
        <>

            <header>
                <div className='container'>
                    <div className='head'>
                        <h1><span>React</span> App</h1>
                        <nav>
                            <ul>
                                <li><a href='#'></a>About us</li>
                                <li><a href='#'></a>Services</li>
                                <li><a href='#'></a>Projects</li>
                            </ul>
                        </nav>
                        <Button btn={'primary-btn'} content={'Log In'} id={'header-btn'} />
                        <div class="bar">
                            <i class="fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;