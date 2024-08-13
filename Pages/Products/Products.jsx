import React, { useState } from 'react'
import { transactions, userRows } from '../../data'
import './Products.css'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { products } from '../../data';


export default function Products() {
  const[productsData,setProductsData]=useState(products)
  const productDelete=productsID=>{
    setProductsData(productsData.filter(product=>product.id!=productsID))
  }
  const columns=[
    {
      // نام در دیتا
    field:'id',
    headerName:'ID',
    width:90
    },
    {
      field:'title',
      headerName:'Name',
      width:200,
      renderCell:(params)=>{
        return(

<Link to={`/product/${params.row.id}`} className='link'>

<div className='userListUser'>
  <img src={params.row.avatar} className='userListImg'/>
  {params.row.title}
</div>
</Link>
        )
        

      }

    },
    {
      field:'price',
      headerName:"Price",
      width:200
    },
    {
      field:'status',
      headerName:'Status',
      width:120
    },
   
    {
      field:'action',
      headerName:'Action',
      width:150,
      renderCell:(params)=>{
        return(
          <>
          <Link to={`/product/${params.row.id}`} className='link'>
          <button className="userListEdit">Edit</button>
          </Link>
          <DeleteOutlineIcon
          className="userListDelete"
          onClick={()=>productDelete(params.row.id)}
          />
          </>
        )
      }
    }
  ]
  return (
    <div className='userList'>
<DataGrid
rows={productsData}
columns={columns}
disableRowSelectionOnClick
pageSize={3}
checkboxSelection
/>
    </div>
  )
}
