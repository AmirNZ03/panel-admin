// // import React,{Component,PureComponent} from "react"
// import React from "react"
// import Menu from "./Menu"
// import { AlertHeading } from "react-bootstrap"
// // import  Alert  from "react-bootstrap/Alert"
// import  {Button,Alert,Card,Modal,Toast,Container,Row,Col}  from "react-bootstrap"
// import Badge from "react-bootstrap/Badge"
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Spinner from 'react-bootstrap/Spinner';
// import './App.css'
// import BC from "./BC"
// // import Right from "./Right"
// import Left from "./Left"
// import Def from "./Def"
// import { Typography } from "@mui/material"
// import React,{useState} from "react"
// import Form from "./Form"
// import Users from "./Users"
// import{Routes,Route,useRoutes,} from 'react-router-dom'
// import Home from "./User/Home"
// // import About from "./User/About"
// import Contact from "./User/Contact"
// import Product from "./User/Product"
// import Post from "./User/Post"
// import MainPost from "./MainPost"
// import Header from "./Header"
// import Courses from "./Courses"
// import MainCourse from "./MainCourse"
// import About from "./About"
// import routes from './routes'
// import { Typography } from "@mui/material"
// import PersonIcon from '@mui/icons-material/Person';
// import DeleteIcon from '@mui/icons-material/Delete';
// import {Button,Container,IconButton} from "@mui/material";
// import SendIcon from '@mui/icons-material/Send';
// import { DataGrid ,Box} from '@mui/x-data-grid';
// import { useState } from "react";
// import Header from "./shop/Header"
// import Header2 from "./shop/Header2"
// import Body from "./shop/Body"
// import routes from "./routes"
// import { useRoutes } from "react-router-dom"
// import Topbar from "./Components/topbar/Topbar"
// import Sidebar from "./Components/sidebar/Sidebar"
// import './App1.css'\import React from 'react'
import React from 'react'
import routes from './routes'
import { useRoutes } from 'react-router-dom'
import Topbar from './topbar/Topbar'
import Sidebar from './sidebar/Sidebar'
import './App.css'

export default function App() {
  let router=useRoutes(routes)
  return (
    <>
    <Topbar/>
    <div className='container'>
    <Sidebar/>
    {router}
    
    </div>

    </>
  )
}

// import LoginForm from "./LoginForm";
// // import useInput from "./useInput";

// // import Usecounter from "./Usecounter"
// // import Usecounter from "./Usecounter"
// // import { useState,useEffect } from "react"
// // import useFetch from './useFetch'
// // import useLocalStorage from "./useLocalStorage"
// // import { useState,useMemo, memo, useCallback } from "react"
// // import Notelist from "./Notelist"
// import React, { useEffect, useState } from "react"
// import { useRef } from "react"
// import './zx.css'
// import Test from "./Test"

// export default function App() {
//   const[todos,setTodos]=useState([])
//   const[currentPage,setCurrentPage]=useState(1)
//   const[paginatedTodos,setPaginatedTodos]=useState([])
//   // const[isPending,setIsPending]=useState(true)

//   useEffect(()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res=>res.json())
//     .then(data=>{
//       setTodos(data)
//       // setIsPending(false)
//       // console.log(data);
//     })
//   },[])
  // const[course,setCourse]=useState('js')
  // const[title,setTitle]=useState("")
  // const[renderCount,setrenderCount]=useState(1)
  // const inputRef=useRef(null)
  // const lit=useRef()
  // const courseref=useRef('ali')
  // const renderCounts=useRef(1)
  // const timer=useRef(0)
  // useEffect(()=>{
  //   setInterval(() => {
  //     timer.current=timer.current+1
      
  //   }, 1000);
  // })


//   useEffect(()=>{
//     renderCounts.current+=renderCounts.current
//   })

//   useEffect(()=>{
// console.log(inputRef);
// inputRef.current.focus()
//   },[])

//   const addNewValue=()=>{
//     inputRef.current.value="amircx"
//   }
//   const addNewClass=()=>{
//     inputRef.current.classList.add("bg-red")
//     lit.current.classList.add('vo')
//   }

//   const changeState=()=>{
//     setCourse('react')
//   }
// //   const changeRef=()=>{
// //   courseref.current="vue"
// //   console.log(courseref);
// //   }

//   return(
//     <div>
//       {/* <h3 ref={lit}>amir</h3>
//       <input type="text" placeholder="username" ref={inputRef}/> 
//       <h3>{course}</h3>
//       <hr/>
//       <input type="text" value={title} onChange={e=>setTitle(e=>e.target.value)}></input>
//       <h3>input value:{title}</h3>
//       <button onClick={addNewValue}>Add new value</button>
//       <button onClick={addNewClass}>Add new Class</button>
//       <button onClick={changeState}>update course</button>
//       <h3>timer:{timer.current}</h3>
//       <button onClick={changeRef}>update ref</button>
//       <h3>course ref:{courseref.current}</h3>
//       <h3>render count:{renderCount}</h3>
//       {console.log(courseref.current)} */}
//       {/* <button className="btn btn-danger">CLick</button> */}
//       {

//           <table className="table">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>User ID</th>
//                 <th>Title</th>
//                 <th>Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {todos.map(todo=>(
//                 <tr>
//                   <td>{todo.id}</td>
//                   <td>{todo.userId}</td>
//                   <td>{todo.title}</td>
//                   <td>
//                     <p className={todo.completed?"btn btn-success":'btn btn-danger'}>
//                       {todo.completed?'completed':"pending"}
//                     </p>
//                   </td>
//                   {/* {console.log(todo)} */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//         <nav className="d-flex justify-content-center">
//           <ul className="pagination">
//             li.page-item
//           </ul>

//         </nav>
//       }
// <Test></Test>
//     </div>

//   )
// }

  // const[counter,setCounter]=useState(0)
  // const[title,setTitle]=useState('')

  // const[firstCount,setFirstCount]=useState(0)
  // const[secondCount,setSecondCount]=useState(0)
  // const[text,setText]=useState('')
  // const[count,addCount,minusCount]=Usecounter(0)
//  const{posts,ispending,error}=useFetch('https://jsonplaceholder.typicode.com/posts')
//  const[value,setValue]=useLocalStorage('sabz','')
  // let router=useRoutes(routes)


//   let router=useRoutes(routes)
//      {path="/", element:<Home/>},
//  {  path="/about", element:<About/> },
 
// {path:"/contact" ,element:<Contact/>},
//    {path:"/course/1", element:<Product/> },
//    {path:"/posts", element:<Post/>},
//    {path:"/post/:id" ,element:<MainPost/>},
//  {path:"/courses/:courseID" ,element:<MainCourse/>},
//    {
//     path:"/about/*", element:<About/>,children:[
//       {path:'setting', element:<p style={{textAlign:'center'}}>setting</p>},
//       {path:'dashbord' ,element:<p style={{textAlign:'center'}}>dashbord</p>}
//     ]

//    }
//  {
//    path:"/home/*" ,element:<Home/>,children:[
//     {path:'product', element:{<p>product</p>}></>}
//     path:'member', element:{{<p>member</p>}}></>
//    ]

//  }
// const isEven=useMemo(()=>{
//   let index=0
//   while(index<20000000){
//     index++
//   }
//   return firstCount%2===0
// },[firstCount])
 

//   ])
// const firstCounterHandler=()=>{
 
// setFirstCount(prevCount=>prevCount+1)
// }
// const secondCounterHandler=()=>{
//   setSecondCount(prevCount=>prevCount+1)
// }
// const addCounter=useCallback(()=>{
//     setCounter((prevCount)=>prevCount+1)
// },[counter])
// const minusCounter=useCallback(()=>{
//  setCounter( (prevCount)=>prevCount-1)
// },[counter])

//   return   (<div>
//     <input type="text"
//     value={title}
//     onChange={e=>setTitle(e.target.value)}/>
//     <Title title={title}/>
//     <h3>{counter}</h3>
//     <button value={counter}
//     onClick={e=>setCounter(e.target.val)}></button>
//     <Buttons add={addCounter} minus={minusCounter} />
//   </div>)

  //   <div className="App">
  //   {/* /* <Topbar/>
  // <div className="container">   
  //   <Sidebar/> */} */}
  //   <p>{count}</p>
  //   <button onClick={addCount}>Add</button>
  //     <button onClick={minusCount}>Minus</button>
 

// const Title=memo(({title})=>{
//  console.log("amir");
//   return <h3>{title}</h3>
// })
// const Buttons=({add,minus})=>{
// console.log("butoon");
//   return(
//     <>
//     <button onClick={add}>Add</button>
//     <button onClick={minus}>Minus</button>
//     </>

    {/* {error&&<div>{error}</div>}
    {ispending&&<div>Loading...</div>}
    {posts&&posts.map(post=>(
      <div key={post.id}>
      <h2>{post.id}-{post.title}</h2>
      <hr/> */}
      {/* <input type="text" value={value} onChange={(event)=>setValue(event.target.value)}/> */}
      {/* <LoginForm/>
      <useInput/> */}
      {/* <button onClick={firstCounterHandler}>Add First counter:{firstCount}</button>
      {isEven?'Even':'odd'}
      <br/>
      <button onClick={secondCounterHandler}>Add Second counter:{secondCount}</button> */}
      // <Notelist/>
      // </div>
    
    
  
  
  // </div>
 
    // {router}
  


    
//     <>
//   {/* /* <Heaer/>
// <Routes>
//   <Route path="/" element={<Home/>} />
//   <Route path="/about" element={<About/>} />
//   <Route path="/contact" element={<Contact/>} />
//   <Route path="/course/1" element={<Product/>} />
//   <Route path="/posts" element={<Post/>}></Route>
//   <Route path="/post/:id" element={<MainPost/>}></Route>
//   {/* <Route path="*" element={<NotFound/>}></Route> */
//   <Route path="/courses/:courseID" element={<MainCourse/>}></Route>
//   <Route path="/about/*" element={<About/>}> */}
//   <Route path='setting' element={<p style={{textAlign:'center'}}>setting</p>}></Route>
//   <Route path='dashbord' element={<p style={{textAlign:'center'}}>dashbord</p>} /></Route>
//   <Route path="/home/*" element={<Home/>}>
//   <Route path='product' element={{<p>product</p>}}></Route>
//     <Route path='member' element={{<p>member</p>}}></Route> */}
    
//   </Route>
// </Routes>
//     </>
  


// 
// export default function App() {
// //   const[columns,setColumns]=useState([
    
// //       { field: 'id', headerName: 'ID', width: 90 },
// //       {
// //         field: 'firstName',
// //         headerName: 'First name',
// //         width: 150,
// //         editable: true,
// //       },
// //       {
// //         field: 'lastName',
// //         headerName: 'Last name',
// //         width: 150,
// //         editable: true,
// //       },
// //       {
// //         field: 'age',
// //         headerName: 'Age',
// //         type: 'number',
// //         width: 110,
// //         editable: true,
// //       },
// //       {
// //         field: 'fullName',
// //         headerName: 'Full name',
// //         description: 'This column has a value getter and is not sortable.',
// //         sortable: false,
// //         width: 160,
// //         valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
// //       },
// //     ])

// //     const[rows,setRows]=useState([
// //       { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
// //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
// //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
// //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
// //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
// //   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
// //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
// //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
// //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// //     ])
  
// //   return (
// //  <Container >
// //  {/* <PersonIcon color="success" fontSize="large"></PersonIcon>
// //  <DeleteIcon color="disabled"></DeleteIcon>
// //  <Button variant="text" color="success" endIcon={<DeleteIcon/>} size="small" onClick={()=>alert('skfj')}>Text</Button>
// //  <Button variant="contained" disabled startIcon={<SendIcon/>} size="large">Contained</Button>
// //  <IconButton aria-label="delete">
// //   <DeleteIcon />
// // </IconButton> */}

// // <Box sx={{ height: 400, width: '100%' }}>
// //       <DataGrid
// //         rows={rows}
// //         columns={columns}
// //         initialState={{
// //           pagination: {
// //             paginationModel: {
// //               pageSize: 5,
// //             },
// //           },
// //         }}
// //         pageSizeOptions={[5]}
// //         checkboxSelection
// //         disableRowSelectionOnClick
// //       />
// //     </Box>

// //  </Container>
// //   )}



  