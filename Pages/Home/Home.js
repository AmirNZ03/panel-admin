import React from 'react'
import Features from '../../Components/features/Features'
import Chart from '../../Components/Chart/Chart'
import { xAxisData } from '../../data'
import WidgetSm from '../../Components/widgetSm/WidgetSm'
import WidgetLg from '../../Components/WidgetLg/WidgetLg'
import UsersList from '../Users/UsersList'
import Sidebar from '../../Components/sidebar/Sidebar'
import Topbar from '../../Components/topbar/Topbar'
import Products from '../Products/Products'
import Product from '../../Components/Product/Product'
// import '../../Components/WidgetLg/WidgetLg.css'

export default function Home() {
  return (
    <div className='home'>
      {/* <Topbar/>
       <UsersList/>
      <Sidebar/> */}
      
      <Features/>
      <Chart grid title="Month Sale" data={xAxisData} dataKey="Sale"/>
      <div className='homeWidgets'></div>
      <WidgetSm/>
      <WidgetLg/>
     {/* <Products/>
     <Product/> */}


    </div>
  )
}
