import React from 'react'
import './Left-Section.css'
import { NavLink } from 'react-router-dom';


export const LeftSection = () => {
  return (
    <aside>
        <div>Contact Panel</div>
        <ul className='lists'>
            <li><NavLink to='/' >Add Contacts</NavLink></li>
            <li><NavLink to='contactlist' >Contact List</NavLink></li>
            <li><NavLink to='favouritecontacts' >Favourite Contacts</NavLink></li>
            <li><NavLink to='blockedcontacts' >Blocked Contacts</NavLink></li>
            <li><NavLink to='settings' >Settings</NavLink></li>
        </ul>
    </aside>
  )
}
