import React from 'react'
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import Dashboard from './dashboard';

export default function Home({allData,value}) {
  return (
    <div>
        <Navbar/>
        <Sidebar/>
        <Dashboard  allData={allData} value={value}/>
    </div>
  )
}
