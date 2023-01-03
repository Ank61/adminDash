import React, { useEffect, useState } from 'react'
import './dashboard.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Dashboard() {
    //Raw data for Recent Request
    const [data, setData] = useState([{ "Assignee": "Arjun Gupta", "Subject": "Regarding delay in processing", "Status": "Approved", "LastUpdate": "Dec 2022", "RequestID": "1425" },
    { "Assignee": "Nikhil Khurana", "Subject": "Slow growth in HR department", "Status": "Pending", "LastUpdate": "Nov 14 2022", "RequestID": "14325" },
    { "Assignee": "Shashank Sharma", "Subject": "Need urgent approval for clearing tax", "Status": "Pending", "LastUpdate": "Nov 22 2022", "RequestID": "13425" },
    { "Assignee": "Rajesh Gupta", "Subject": "Regarding delay in processing", "Status": "Pending", "LastUpdate": "Dec 2022", "RequestID": "2325" }])
    //Raw data for Project status
    const [project, setProject] = useState([{ "Name": "Siddharth Kumar", "Due": "Jan 18 2023", "Progress": "25", "Dept": "HR", "Task": "Completion of Target till this January" }, { "Name": "Diya Dutta", "Due": "Feb 01 2022", "Progress": "75", "Dept": "Developer", "Task": "Completion of pending task" }, { "Name": "Aarav", "Due": "Jan 24 2023", "Progress": "34", "Dept": "Project Mangement", "Task": "Making report for 2022" }, { "Name": "Isha", "Due": "Feb 03 2023", "Progress": "25", "Dept": "Buisness Development", "Task": "Completion of targets" }, { "Name": "Arjun Dev", "Due": "Jan 06 2023", "Progress": "59", "Dept": "Digital Marketing", "Task": "Increase the reach by 20%" }, { "Name": "Riya Kumar", "Due": "Feb 07 2023", "Progress": "60", "Dept": "HR", "Task": "Completion of report for 2022" }])
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [requestModal, setRequestModal] = useState(false);
    const [newTask, setNewTask] = useState({ Task: "", Dept: "", Name: "", Due: "", Progress: "0" })
    const [editTask, setEditTask] = useState({ Task: "", Dept: "", Name: "", Due: "", Progress: "0", index: "" })
    const [toBeApprove, setToBeApprove] = useState({ Assignee: "", Subject: "", Status: "", LastUpdate: "", RequestID: "0", index: "" })

    //modal for new Task
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //modal for edit button
    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
    //modal for recent request
    const handleCloseRequest = () => setRequestModal(false);
    const handleShowRequest = () => setRequestModal(true);
    //Recent Request for approval
    function handlePending(item, index) {
        setToBeApprove((prevState) => ({ ...prevState, Assignee: item.Assignee, Subject: item.Subject, Status: item.Status, LastUpdate: item.LastUpdate, RequestID: item.RequestID, index: index }))
    }
    function handleRequestSubmit() {
        data.splice(toBeApprove.index, 1, toBeApprove)
        handleCloseRequest()
        console.log("final request", toBeApprove)
        console.log("final request data", data)
    }
    //Project div funcitons
    function handleNewTask() {
        handleShow()
    }
    //Adding new Task 
    function handleSubmitNewTask() {
        const originalArray = [...project]
        originalArray.push(newTask)
        setProject(originalArray)
        handleClose()
    }
    //Deleting a task
    function handleTaskDelete(index) {
        const newItems = [...project];
        newItems.splice(index, 1);
        setProject(newItems);
    }
    //Edting a task
    function handleTaskEdit(item, index) {
        setEditTask((prev) => ({ ...prev, Task: item.Task, Dept: item.Dept, Name: item.Name, Due: item.Due, Progress: item.Progress, index: index }))
    }
    function handleEditSubmit() {
        const newItem = { ...editTask }
        project.splice(editTask.index, 1, editTask)
        handleCloseEdit()
    }


    return (
        <div className="dashMain">
            <div>
                <div className='home'><i class="fa-solid fa-house"></i></div>
                <h5 style={{ marginRight: 700, paddingTop: 8, }}>Dashboard</h5>
            </div>
            <div className="row" style={{ paddingTop: 40 }}>
                <div className="col-md-4 grid-margin" >
                    <div className="card card-img-holder text-white" style={{ background: 'linear-gradient(to right, #fcbe96 , #fb8dab)' }}>
                        <div className="card-body">
                            <h4 className="font-weight-normal mb-3">Weekly Sales &nbsp; &nbsp;<i class="fa-solid fa-arrow-trend-up fa-sm"></i>
                            </h4>
                            <h2 className="mb-5">$ 15,0000</h2>
                            <h6 className="card-text">Increased by 60%</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-info card-img-holder text-white" style={{ background: 'linear-gradient(to right, #8ecaf9 , #3c98e7)' }}>
                        <div className="card-body">
                            <h4 className="font-weight-normal mb-3">Weekly Orders &nbsp; &nbsp;<small><i class="fa-solid fa-bookmark fa-sm"></i></small>
                            </h4>
                            <h2 className="mb-5">45,6334</h2>
                            <h6 className="card-text">Decreased by 10%</h6>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 stretch-card grid-margin">
                    <div className="card bg-gradient-success card-img-holder text-white" style={{ background: 'linear-gradient(to right, #7fd9d1 , #40d5bb)' }}>
                        <div className="card-body">
                            <h4 className="font-weight-normal mb-3">Visitors Online &nbsp; &nbsp;<small><i class="fa-solid fa-diamond fa-sm"></i></small>
                            </h4>
                            <h2 className="mb-5">95,5741</h2>
                            <h6 className="card-text">Increased by 5%</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: 30 }}>
                <div className="col-xl-12 grid-margin stretch-card">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title" style={{ float: 'left', marginLeft: 350 }}><small>Project Status</small></h4> <button className='addNewTask' onClick={() => handleNewTask()}>Assign New Task <i class="fa-solid fa-plus" ></i></button>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Approval Request</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <label>Task Description : </label>
                                    <input type="text" className='form-control' placeholder='Enter task' value={newTask.Task} onChange={(e) => setNewTask((prev) => ({ ...prev, Task: e.target.value }))} ></input>
                                    <label>Department : </label>
                                    <input type="text" className='form-control' placeholder='Enter departmentt' value={newTask.Dept} onChange={(e) => setNewTask((prev) => ({ ...prev, Dept: e.target.value }))}></input>
                                    <label>Assign to : </label>
                                    <input type="text" className='form-control' placeholder='Enter name' value={newTask.Name} onChange={(e) => setNewTask((prev) => ({ ...prev, Name: e.target.value }))}></input>
                                    <label>Due Date : </label>
                                    <input type="text" placeholder="Enter date..." className='form-control' value={newTask.Due} onChange={(e) => setNewTask((prev) => ({ ...prev, Due: e.target.value }))}></input>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button variant="primary" onClick={() => { handleSubmitNewTask() }}>
                                        Add
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th> Name </th>
                                            <th> Due </th>
                                            <th> Progress </th>
                                            <th> Department </th>
                                            <th> Task </th>
                                            <th> Edit Task</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {project.map((item, Index) => {
                                            return <>
                                                <tr>
                                                    <td>{Index + 1} </td>
                                                    <td> {item.Name}</td>
                                                    <td> {item.Due} </td>
                                                    <td>{Number(item.Progress) > 50 ? <>{item.Progress} %&nbsp; <i class="fa-solid fa-up-long" style={{ color: 'green' }}></i></> : <>{item.Progress}% &nbsp; <i class="fa-solid fa-down-long" style={{ color: 'red' }}></i></>}</td>
                                                    <td> {item.Dept} </td>
                                                    <td> {item.Task} </td>
                                                    <td>  <i class="fa-solid fa-trash" style={{ color: 'red', cursor: 'pointer' }} onClick={() => handleTaskDelete(Index)}></i> &nbsp; &nbsp; <i class="fa-solid fa-pen-to-square" style={{ color: '#22ae96', cursor: 'pointer' }} onClick={() => { handleTaskEdit(item, Index); handleShowEdit() }}></i></td>
                                                </tr>
                                            </>
                                        })}
                                        <Modal show={showEdit} onHide={handleCloseEdit}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Approval Request</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <label>Task Description : </label>
                                                <input type="text" className='form-control' placeholder='Enter task' value={editTask.Task} onChange={(e) => setEditTask((prevState) => ({ ...prevState, Task: e.target.value }))} ></input>
                                                <label>Department : </label>
                                                <input type="text" className='form-control' placeholder='Enter departmentt' value={editTask.Dept} onChange={(e) => setEditTask((prevState) => ({ ...prevState, Dept: e.target.value }))} ></input>
                                                <label>Assign to : </label>
                                                <input type="text" className='form-control' placeholder='Enter name' value={editTask.Name} onChange={(e) => setEditTask((prevState) => ({ ...prevState, Name: e.target.value }))}></input>
                                                <label>Due Date : </label>
                                                <input type="text" placeholder="Enter date..." className='form-control' value={editTask.Due} onChange={(e) => setEditTask((prevState) => ({ ...prevState, Due: e.target.value }))}></input>
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
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{ marginTop: 25 }}>
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><small>Recent Requests</small></h4>
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th> Assignee </th>
                                            <th> Subject </th>
                                            <th> Status </th>
                                            <th> LastUpdate </th>
                                            <th> Tracking ID </th>
                                            <th>Approval</th>
                                        </tr>
                                    </thead>
                                    <Modal show={requestModal} onHide={handleCloseRequest}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Approval Request Details</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body> <div style={{ marginLeft: 20 }}>
                                            <h6>Name : &nbsp; &nbsp; &nbsp;&nbsp;{toBeApprove.Assignee}</h6>
                                            <h6>Subject : &nbsp; &nbsp;{toBeApprove.Subject}</h6>
                                            <h6>Present Status : &nbsp; &nbsp;{toBeApprove.Status}</h6>
                                            <h6>Last Update : &nbsp; &nbsp; &nbsp;&nbsp;{toBeApprove.LastUpdate}</h6>
                                            <h6>ID : &nbsp;&nbsp; {toBeApprove.RequestID}</h6>
                                            <form>
                                                <label>
                                                    <input type="radio" name="color" value="Approved" style={{ marginLeft: 50 }} onChange={(e) => setToBeApprove((prev) => ({ ...prev, Status: e.target.value }))} /> Approve
                                                </label>
                                                <label>
                                                    <input type="radio" name="color" value="Pending" defaultChecked style={{ marginLeft: 50 }} onChange={(e) => setToBeApprove((prev) => ({ ...prev, Status: e.target.value }))} /> Pending
                                                </label>
                                            </form>
                                        </div>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleCloseRequest}>
                                                Close
                                            </Button>
                                            <Button variant="primary" onClick={() => handleRequestSubmit()}>
                                                Save Changes
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    <tbody>
                                        {data.map((item, index) =>
                                            <tr>
                                                <td>{item.Assignee}</td>
                                                <td>{item.Subject}</td>
                                                <td>{item.Status}</td>
                                                <td>{item.LastUpdate}</td>
                                                <td>{item.RequestID}</td>
                                                <td>{item.Status === "Approved" ? <button style={{ border: 'none', backgroundColor: 'white' }}><i style={{ color: 'green' }} class="fa-solid fa-check"></i></button> : (
                                                    <button style={{ border: 'none', backgroundColor: 'white' }} onClick={() => { handlePending(item, index); handleShowRequest() }}><i style={{ color: 'red' }} class="fa-solid fa-square-xmark"></i></button>
                                                )}</td>
                                            </tr>)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
