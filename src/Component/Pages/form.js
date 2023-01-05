import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export default function Form({ Employee, setEmployee, newUser,nameErr,emailErr,websiteErr,allError, showAllError,Edit, setEdit, EditUser }) {
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [websiteError, setWebsiteError] = useState("")
    

    useEffect(()=>{
        if(allError){
            setNameError("Name is required")
            setEmailError("Email is required")
            setWebsiteError("Website is required")
        }
        if(nameErr){
            setNameError("Name is required")
        }
        if(emailErr){
            setEmailError("Email is required")
        }
        if(websiteErr){
            setWebsiteError("Website is required")
        }
        else{
            setNameError("")
            setEmailError("")
            setWebsiteError("")
        }
    },[allError,nameErr,emailErr,websiteErr])

    var Name;
    function handleName(e) {
        Name = e
        if (/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/.test(Name)) {
            setNameError("Please enter letters only!")
        }
        else if (Name.length >= 14) {
            setNameError("Oops character too long")
        }
        else {
            setNameError("")
        }
    }
    function handleNamefocus() {
        setNameError("")
    }
    function handleNameBlur() {
        if (Employee.name === "") {
            setNameError("Name is required")
        }
        else {
            setNameError("")
        }
    }
    //function for Email validation 
    var Email;
    function handleEmail(e) {
        Email = e;
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email)) {
            setEmailError("Please enter valid Email!")
        }
        else {
            setEmailError("")
        }
    }
    function handleEmailfocus() {
        setEmailError("")
    }
    function handleEmailBlur() {
        if (Employee.email === "") {
            setEmailError("Email is required")
        }
        if (emailError !== "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Employee.email)) {
            setEmailError("Email is required")
        }
        else {
            setEmailError("")
        }
    }
    //function for website validation 
    var Website;
    function handleWebsite(e) {
        Website = e;
        if (!/[a-z0-9]+-?[a-z0-9]+\.(org|com)(\.[a-z]+)?/i.test(Website)) {
            setWebsiteError("Enter a valid website")
        }
        else {
            setWebsiteError("")
        }
    }
    function handleWebsitefocus() {
        setWebsiteError("")
    }
    function handleWebsiteBlur() {
        if (Employee.website === "") {
            setWebsiteError("Website is required")
        }
        if (websiteError !== "" || !/[a-z0-9]+-?[a-z0-9]+\.(org|com)(\.[a-z]+)?/i.test(Employee.website)) {
            setWebsiteError("Website is required")
        }
        else {
            setWebsiteError("")
        }
    }



    if (newUser) {
        return (
            <>
                <form>
                    <label>Name : </label>
                    <input type="text" className='form-control' placeholder='Enter name' value={Employee.name} onChange={(e) => { handleName(e.target.value.replace(/\s{2}/g, '')); setEmployee((prev) => ({ ...prev, name: e.target.value.replace(/\s{2}/g, '') })) }} onFocus={() => handleNamefocus()} onBlur={() => handleNameBlur()}></input>
                    <span style={{ height: 15, color: 'red' }}>{nameError}</span>
                    <br></br>
                    <label>Website : </label>
                    <input type="text" className='form-control' placeholder='Enter department' value={Employee.website} onChange={(e) => { handleWebsite(e.target.value.trim()); setEmployee((prev) => ({ ...prev, website: e.target.value.trim() })) }} onFocus={() => handleWebsitefocus()} onBlur={() => handleWebsiteBlur()}></input>
                    <span style={{ height: 15, color: 'red' }}>{websiteError}</span>
                    <br></br>
                    <label>Email : </label>
                    <input type="text" className='form-control' placeholder='Enter email' value={Employee.email} onChange={(e) => { handleEmail(e.target.value.trim()); setEmployee((prev) => ({ ...prev, email: e.target.value.trim() })) }} onFocus={() => handleEmailfocus()} onBlur={() => handleEmailBlur()}></input>
                    <span style={{ height: 15, color: 'red' }}>{emailError}</span>
                </form>
            </>
        )
    }
    if (EditUser) {
        return (
            <form>
                <label>Name : </label>
                <input type="text" className='form-control' placeholder='Enter task' value={Edit.name} onChange={(e) => setEdit((prevState) => ({ ...prevState, name: e.target.value }))} ></input>
                <label>Website : </label>
                <input type="text" className='form-control' placeholder='Enter departmentt' value={Edit.website} onChange={(e) => setEdit((prevState) => ({ ...prevState, website: e.target.value }))} ></input>
                <label>Email </label>
                <input type="text" className='form-control' placeholder='Enter name' value={Edit.email} onChange={(e) => setEdit((prevState) => ({ ...prevState, email: e.target.value }))}></input>
            </form>
        )
    }
}

// :
