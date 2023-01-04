import React from 'react'
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import Dashboard from './dashboard';

export default function Home() {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}
