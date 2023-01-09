import React, { useEffect, useRef, useState } from 'react'
import '../Pages/dashboard.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { fetch } from '../Saga/Actions/action';
import { useDispatch } from 'react-redux';
import { useSelector} from 'react-redux';
import Form from './form';

export default function UserDash() {
    const [allEmployee, setAllEmployee] = useState([])
    const [newEmp, setNewEmp] = useState({ name: "", website: "", email: "", index: "" })
    const [editEmp, setEditEmp] = useState({ name: "", website: "", email: "", index: "" })
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [allError, setAllError] = useState(false);
    const [nameErr, setNameErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);
    const [websiteErr, setWebsiteErr] = useState(false);
    // const [formSelect, setFormSelect] = useState(false);
    const array = useSelector((state)=>state.data)
    const dispatch = useDispatch(); 
    const usePrevious = (value) => {
        const ref = useRef();
        useEffect(() => {
            ref.current = value;
        });
        return ref.current;
    }
    const prevCount = usePrevious(array);

    useEffect(() => {
        if(prevCount !== array){
            dispatch(fetch())
        }
    },[])

useEffect(()=>{
    setAllEmployee(array)
},[array])

    //function for New User modal 
    const handleClose = () => { setShow(false); setAllError(false); setNameErr(false); setEmailErr(false); setWebsiteErr(false); setNewEmp({ name: "", website: "", email: "", index: "" }); setName(false);setEmail(false);setWebsite(false) };
    const handleShow = () => setShow(true);
    //modal for edit button
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    const [namesection,setName] = useState(false)
    const [email,setEmail] = useState(false)
    const [website,setWebsite] = useState(false)
    //fucntion to delete
    function handleSubmitNewEmployee() {
        //to immediately reflect the submiited data since no get request can be sent again(it would not change the data)
        if (newEmp.name === "" && newEmp.email === "" && newEmp.website === "") {
            setAllError(true)
        }
        if (newEmp.name === "") {
            setNameErr(true)
            setAllError(false)
        }
        if (newEmp.email === "") {
            setEmailErr(true)
            setAllError(false)
        }
        if (newEmp.website === "") {
            setWebsiteErr(true)
            setAllError(false)
        }
        else {
            if( !website && !email && !namesection && newEmp.name !== "" && newEmp.website !== "" && newEmp.email !== ""){
                console.log('inside...')
                const originalArray = [...allEmployee]
                originalArray.push(newEmp)
                setAllEmployee(originalArray)
                setNewEmp({ name: "", website: "", email: "", index: "" })
                handleClose()
                const obj = {
                    name: newEmp.name,
                    website: newEmp.website,
                    email: newEmp.email
                }
                axios.post(`https://jsonplaceholder.typicode.com/users`, obj).then((response) => {
                    console.log("Added New Employee through API :", response.data)
                    toast.success("Successfully Added through API")
                }).catch((err) => console.log(err))
            }
        }
    }
    function handleNewTask() {
        handleShow()
    }
    //fuuction to delete 
    function handleEmpDelete(index) {
        const newItems = [...allEmployee];
        newItems.splice(index, 1);
        console.log(index)
        setAllEmployee(newItems);
        axios.delete(`https://jsonplaceholder.typicode.com/users/${index + 1}`).then((response) => {
            console.log("Successfully deleted through API", response.data);
            toast.success("Successfully deleted through API")
        }).catch((err) => console.log(err))
    }
    //Edting a task
    function handleEmpEdit(item, index) {
        setEditEmp((prev) => ({ ...prev, name: item.name, website: item.website, email: item.email, index: index }))
    }
    function handleEditSubmit() {
        //to immediately reflect the edited data since no get request can be sent again(it would not change the data)
        const newItem = { ...editEmp }
        allEmployee.splice(editEmp.index, 1, editEmp)
        const obj = {
            name: editEmp.name,
            website: editEmp.website,
            email: editEmp.email
        }
        handleCloseEdit()
        //change through API but it will not reflect in my data as it is hardcoded
        axios.put(`https://jsonplaceholder.typicode.com/users/${editEmp.index + 1}`, obj).then((response) => {
            console.log("Edited Successfully through API : ", response.data);
            toast.success("Edit Successfull through API!")
        }).catch((err) => console.log(err))
    }

    return (
        <div className='dashMain'>
            <Toaster />
            <div>
                <div className='home'><i class="fa-solid fa-user"></i></div>
                <h5 style={{ marginRight: 700, paddingTop: 8, }}>All Employee </h5>
            </div>
            <div className="row" style={{ marginTop: 25 }}>
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title" style={{ float: 'left', marginLeft: 355, color: '#ef0b60' }}><small>Details</small></h4><button className='addUser' onClick={() => handleNewTask()}>Add Employee &nbsp; <i class="fa-solid fa-user-plus"></i></button>
                            <div className="table-responsive">
                                <table className="table">
                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Add New User</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form Employee={newEmp} newUser={show} allError={allError} nameErr={nameErr} setWebsite={setWebsite} setName={setName} setEmail={setEmail} emailErr={emailErr} websiteErr={websiteErr} setEmployee={setNewEmp} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => handleSubmitNewEmployee()}>
                                                Add
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <thead>
                                        <tr>
                                            <th> S.No</th>
                                            <th> Name </th>
                                            <th> Website </th>
                                            <th> Email</th>
                                            <th> Edit </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allEmployee.length > 0 ? allEmployee.map((item, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.name}</td>
                                                <td>{item.website}</td>
                                                <td>{item.email}</td>
                                                <td><button style={{ backgroundColor: 'white', color: '#27ae96', border: 'none' }} onClick={() => { handleEmpEdit(item, index); handleShowEdit() }}><i class="fa-solid fa-pen-to-square"></i></button> <button style={{ backgroundColor: 'white', border: 'none', color: 'red' }} onClick={() => handleEmpDelete(index)}><i class="fa-solid fa-trash"></i></button></td>
                                            </tr>
                                        ) : "Loading..."}
                                    </tbody>
                                    <Modal show={showEdit} onHide={handleCloseEdit}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Edit User</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form Edit={editEmp} EditUser={showEdit} setEdit={setEditEmp} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseEdit}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => handleEditSubmit()}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
