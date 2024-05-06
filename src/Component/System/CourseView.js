import React, { useEffect, useState } from 'react'
import axios from "axios";
import {FaEdit, FaEye, FaTrashAlt} from "react-icons/fa";
import { Link, Navigate } from 'react-router-dom';
import Search from '../Common/Search';
import CourseService from '../../Service/CourseService';
 
 
 
const CourseView = () => {
   const[Course,setCourse]=useState([]);
   const[search,setSearch]=useState("");
 
    useEffect(() =>{
        loadCourse();
    },[])
 
   const loadCourse=async()=>{
    await CourseService.CourseList().then((response)=>{
      setCourse(response.data)
    })
  }
 
 
 
  const handleDelete =  (id)=>{
     console.log(id);
      CourseService.DeleteCourse(id).then((response)=>{
    // setCourse(response.data);
    console.log(response.data);
    let stu = Course.filter((Course)=> {
      console.log(Course.id)
      } );
    setCourse(stu);
 
    });
 
  //  window.location.reload();
}
 
   
 
 
  return (
    <section>
      <Search search={search}
      setSearch={setSearch}
      />
      <table className="table table-striped  table-hover shadow">
        <thead>        
        <div   data-testid="Adduserbtn"> 
        <Link
                                className="btn btn-primary mx-2"
                                to={"/add-Course"}>
                                Add Course Details
                            </Link></div>
            <tr className="text-center">
 
             <th>Course Id</th>
             <th>Course name</th>
             <th>Course type</th>
             <th colSpan="3">Action</th>
 
            </tr>
        </thead>
        <tbody className="text-center">
           
            {Course
            .map((courses)=>(
            <tr key={courses.id}>
               
                   <td>{courses.id}</td>
               
             
              <td>{courses.name}</td>
              <td>{courses.type}</td>
             
             
              <td className="mx-2">
              <div data-testid="view">  
              <Link  to={`/view-course/${courses.id}`} className="btn btn-info" ><FaEye/>
              View</Link>
              </div>  
              </td>
                
               
           </tr>
            ))}
           
 
 
        </tbody>
       
        </table>
    </section>
  )
}
 
export default CourseView