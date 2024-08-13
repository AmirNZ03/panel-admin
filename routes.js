import { element } from "prop-types";
import Home from "./Pages/Home/Home";
import UsersList from "./Pages/Users/UsersList";
import NewUser from "./Pages/NewUser/NewUser";
import Products from "./Pages/Products/Products";
import Transaction from "./Pages/Transaction/Transaction"

let routes=[
    {path:'/',element:<Home/>},
    {path:'/users' , element:<UsersList/>},
    {path:'/newUser' , element:<NewUser/>},
    {path:'/products' , element:<Products/>},
    {path:'/Transaction' , element:<Transaction/>},
]
export default routes