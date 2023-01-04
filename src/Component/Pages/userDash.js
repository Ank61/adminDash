import React, { useState } from 'react'
import '../Pages/dashboard.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function UserDash() {
    const [allEmployee, setAllEmployee] = useState([
        { "Name": "Meena Arora", "Department": "HR", "Phone": "8274334573", "Email": "meenaArora@gmail.com" },
        { "Name": "Lakshay Mishra", "Department": "Senior Developer", "Phone": "4574334573", "Email": "lakshaymishra@gmail.com" },
        { "Name": "Ritick Rout", "Department": "Junior Developer", "Phone": "9074334573", "Email": "ritickrout@gmail.com" },
        { "Name": "Abhishek Mishra", "Department": "Project Manager", "Phone": "9564334573", "Email": "abhishek@gmail.com" },
        { "Name": "Arwind Sharma", "Department": "Associate Buisness Development", "Phone": "9874334573", "Email": "arwind@gmail.com" },
        { "Name": "Tanvee Sharma", "Department": "Humar Resources", "Phone": "8974323573", "Email": "tanveesharma@gmail.com" },
        { "Name": "Nidhi Kumar", "Department": "Junior Developer", "Phone": "8274334233", "Email": "nidhikumar@gmail.com" },
        { "Name": "Anupriya Sharma", "Department": "Senior Developer", "Phone": "8272334573", "Email": "anupriya@gmail.com" },
        { "Name": "Amandeep Singh", "Department": "Project Manager", "Phone": "2374334573", "Email": "amandeep@gmail.com" },
        { "Name": "Ankit Chohan", "Department": "Senior Developer", "Phone": "9074334573", "Email": "ankit@gmail.com" }])
    const [newEmp, setNewEmp] = useState({ Name: "", Department: "", Email: "" })
    const [editEmp, setEditEmp] = useState({ Name: "", Department: "", Email: "", index: "" })
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal for edit button
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);

    function handleSubmitNewEmployee() {
        const originalArray = [...allEmployee]
        originalArray.push(newEmp)
        setAllEmployee(originalArray)
        handleClose()
    }
    function handleNewTask() {
        handleShow()
    }

    function handleEmpDelete(index) {
        const newItems = [...allEmployee];
        newItems.splice(index, 1);
        setAllEmployee(newItems);
    }
    //Edting a task
    function handleEmpEdit(item, index) {
        setEditEmp((prev) => ({ ...prev, Name: item.Name, Department: item.Department, Email: item.Email, index: index }))
    }
    function handleEditSubmit() {
        const newItem = { ...editEmp }
        allEmployee.splice(editEmp.index, 1, editEmp)
        handleCloseEdit()
    }


    return (
        <div className='dashMain'>
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
                                            <Modal.Title>Approval Request</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <label>Name : </label>
                                            <input type="text" className='form-control' placeholder='Enter name' value={newEmp.Name} onChange={(e) => setNewEmp((prev) => ({ ...prev, Name: e.target.value }))} ></input>
                                            <label>Department : </label>
                                            <input type="text" className='form-control' placeholder='Enter department' value={newEmp.Department} onChange={(e) => setNewEmp((prev) => ({ ...prev, Department: e.target.value }))}></input>
                                            <label>Email : </label>
                                            <input type="text" className='form-control' placeholder='Enter email' value={newEmp.Email} onChange={(e) => setNewEmp((prev) => ({ ...prev, Email: e.target.value }))}></input>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => { handleSubmitNewEmployee() }}>
                                                Add
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <thead>
                                        <tr>
                                            <th> S.No</th>
                                            <th> Name </th>
                                            <th> Department </th>
                                            <th> Email</th>
                                            <th> Edit </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allEmployee.map((item, index) =>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{item.Name}</td>
                                                <td>{item.Department}</td>
                                                <td>{item.Email}</td>
                                                <td><button style={{ backgroundColor: 'white', color: '#27ae96', border: 'none' }} onClick={() => { handleEmpEdit(item, index); handleShowEdit() }}><i class="fa-solid fa-pen-to-square"></i></button> <button style={{ backgroundColor: 'white', border: 'none', color: 'red' }} onClick={() => handleEmpDelete(index)}><i class="fa-solid fa-trash"></i></button></td>
                                            </tr>
                                        )}
                                    </tbody>
                                    <Modal show={showEdit} onHide={handleCloseEdit}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Approval Request</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <label>Name : </label>
                                            <input type="text" className='form-control' placeholder='Enter task' value={editEmp.Name} onChange={(e) => setEditEmp((prevState) => ({ ...prevState, Name: e.target.value }))} ></input>
                                            <label>Department : </label>
                                            <input type="text" className='form-control' placeholder='Enter departmentt' value={editEmp.Department} onChange={(e) => setEditEmp((prevState) => ({ ...prevState, Department: e.target.value }))} ></input>
                                            <label>Email </label>
                                            <input type="text" className='form-control' placeholder='Enter name' value={editEmp.Email} onChange={(e) => setEditEmp((prevState) => ({ ...prevState, Email: e.target.value }))}></input>
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
