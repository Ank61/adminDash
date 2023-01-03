import React from 'react'
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className='dashboard'>Dashboard &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  <i class="fa-solid fa-house"></i></div>
        <div className='employee'>All Employee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; <i class="fa-solid fa-user"></i></div>
        <div className='task'>Daily Task &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;<i class="fa-solid fa-list-check"></i></div>
        <div className='task2'>Charts &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;<i class="fa-solid fa-chart-pie"></i></div>
        <div className='task3'> User Pages &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;<i class="fa-solid fa-book"></i></div>
        <div className='task4'>Updates &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;<i class="fa-solid fa-pen-to-square"></i></div>
    </div>
  )
}
