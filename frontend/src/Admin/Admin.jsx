import React, { useState } from 'react'
import {useNavigate, Routes, Route} from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InboxIcon from '@mui/icons-material/Inbox';
import CssBaseline from '@mui/material/CssBaseline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useMediaQuery,ListItemText,useTheme,Drawer, Box, Toolbar, List, ListItem, ListItemButton, ListItemIcon} from '@mui/material'
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomerTable from './components/CustomerTable';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/Dashboard';
const menu = [
    {name:"Dashboard", path:"/admin", icon:<DashboardIcon/>},
    {name:"Products", path:"/admin/products",icon:<DashboardIcon/>},
    {name:"AddProduct", path:"/admin/product/create",icon:<DashboardIcon/>},
    {name:"Custormers", path:"/admin/customers",icon:<DashboardIcon/>},
    {name:"Orders", path:"/admin/orders",icon:<DashboardIcon/>},
    {name:"", path:""},
]
const Admin = () => {
    const theme = useTheme();
    const isLargeScreean = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false);
    const navigate = useNavigate();
    const drawer = (
        <Box sx={{overflow:"auto",
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
       
        height:"100%"
        }} >
            {isLargeScreean && <Toolbar/>}
            <List>
                 {menu.map((item, index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                    <ListItemButton>
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItemButton>
                 </ListItem>)}
                 
            </List>
            <List>
                 <ListItem   disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon/>
                            
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                 </ListItem>
                 
            </List>
        </Box>
    )
    return (
    <div>
      <div className='flex items-start space-between h-[100vh]  '>
            <CssBaseline/>
            <div
         className='w-[15%] border border-r-gray-300 h-full'
          >
            {drawer}
          </div>
           
          <div className='w-[68%]    '>
                <Routes>
                <Route path='/' element={<AdminDashboard/>}></Route>
                <Route path='/product/create' element={<CreateProductForm/>}></Route>
                <Route path='/products' element={<ProductsTable/>}></Route>
                <Route path='/orders' element={<OrdersTable/>}></Route>
                <Route path='/customers' element={<CustomerTable/>}></Route>
                </Routes>
          </div>
      </div>
    </div>
  )
}

export default Admin
