import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { FaSun, FaMoon } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

//styles that are applied to the route that is currently active
const activeStyle = {
    color: 'rgb(187, 46, 31)'
}

export default function Nav() {
    return (
        <ThemeConsumer>
            {({ theme, toggleTheme }) => (
                <nav className='row space-between'>
                    <ul className='row nav'>
                        <li>
                            <NavLink 
                                to='/'
                                exact 
                                activeStyle={activeStyle}
                                className='nav-link'>
                                    Popular
                            </NavLink>
                        </li>
                        <li>
                            <NavLink 
                                to='/battle'
                                activeStyle={activeStyle} 
                                className='nav-link'>
                                    Battle
                            </NavLink>
                        </li>
                    </ul>
                    <button
                        style={{fontSize:30}}
                        className='btn-clear'
                        onClick={toggleTheme}
                    >
                        {theme === 'light' ? <FaMoon size={26} /> : <FaSun color='#eee' size={26} />}
                    </button>
                </nav>
            )}
        </ThemeConsumer>
    )
}