import React from 'react'
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import { useLocation } from 'react-router-dom';


export default function Sidebar() {
  const navigate = useNavigate()
  const location = useLocation();
  const setColor = { color: '#ef0b60' }
  const defaultColor = { color: 'black' }
  function handleDashboard() {
    navigate("/")
  }

  function handleEmployee() {
    navigate("/user")
  }
  return (
    <div className="sidebar">
      <div className='dashboard' style={location.pathname === "/" ? setColor : defaultColor} onClick={() => handleDashboard()}>Dashboard &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;  <i class="fa-solid fa-house"></i></div>
      <div className='employee' style={location.pathname === "/user" ? setColor : defaultColor} onClick={() => handleEmployee()}>All Employee &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; <i class="fa-solid fa-user"></i></div>
      <div className='task'>Daily Task &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp;<i class="fa-solid fa-list-check"></i></div>
      <div className='task2'>Charts &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; &nbsp;<i class="fa-solid fa-chart-pie"></i></div>
      <div className='task3'> User Pages &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp;<i class="fa-solid fa-book"></i></div>
      <div className='task4'>Updates &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;<i class="fa-solid fa-pen-to-square"></i></div>
    </div>
  )
}
