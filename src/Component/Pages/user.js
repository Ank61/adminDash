import React from 'react'
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import UserDash from './userDash';

export default function User() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <UserDash/>
    </div>
  )
}
