import React , {useEffect, useState} from 'react'
import "./TodoList.css"
import CreateTask from '../modals/CreateTask';
import Card from './Card';
import Homework from './Homework';
export default function TodoList() {
    const [modal, setModal] = useState(false);
    const[taskList, setTaskList]= useState([])
    
    useEffect(()=>{
      let arr=localStorage.getItem("taskList")
  
      if(arr){
        let obj = JSON.parse(arr)
        setTaskList(obj)
      }
    }, [])
    const deleteTask=(index)=>{
      let tempList=taskList
      tempList.splice(index,1)
      localStorage.setItem("taskList",JSON.stringify(tempList))
      setTaskList(tempList)
    }
  const toggle = () =>{
   setModal(!modal);
  }
  const saveTask=(taskObj)=>{
    let tempList=taskList
    tempList.push(taskObj)
    localStorage.setItem("taskList",JSON.stringify(tempList))
    setTaskList(taskList)
    setModal(false)

  }
  return (
    <>
    <div className="header text-center">
        <h3> Todo List</h3>
        <button className = "btn btn-primary mt-2"onClick={() => setModal(true)}>Create Task</button>
    </div>
    <div className="task-container" style={{padding:'60px',}}>
      {taskList && taskList.map((Obj , index)=><Card taskObj={Obj} index={index} deleteTask={deleteTask}/>)}

    </div>
    <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
    <Homework/>
    </>
  )
}
