import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {TableContainer,MenuItem,Menu,AvatarGroup,Card,CardHeader,Button,Table,Avatar,TableBody,TableHead, TableRow,TableCell} from '@mui/material'
import { store } from '../../State/Store';
import { getOrder, shipOrder, confirmOrder, deliveryOrderOrder, deleteOrder } from '../../State/Admin/Order/Action';
const OrdersTable = () => {
  const dispatch = useDispatch();
  const {adminOrder} = useSelector(store=>store);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleShipOrder = (orderId)=>{
    dispatch(shipOrder(orderId))
    handleClose()
  }
  const handleconfirmOrder = (orderId)=>{
    console.log(orderId)
    dispatch(confirmOrder(orderId))
    handleClose()

  }
  const deliveryOrder = (orderId)=>{

    console.log(orderId)

    dispatch(deliveryOrderOrder(orderId))
    handleClose()

  }
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOrderDelete = (orderId)=>{
    console.log(orderId)

    dispatch(deleteOrder(orderId))
  }
  useEffect(()=>{
    dispatch(getOrder())
  },[])
  const arr = adminOrder.orders
   

  return (
    <div>
            <Card className='mt-2 p-5'>
      <CardHeader title='All Products'>
      
      </CardHeader>
      <TableContainer  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Hinh anh</TableCell>

            <TableCell>Ma Khach Hang</TableCell>
            <TableCell align="right">Ten Khach Hang</TableCell>
            <TableCell align="right">Ten San pham</TableCell>
            <TableCell align="right">Gia</TableCell>
            <TableCell align="right">Trang Thai</TableCell>
            <TableCell>Update Status don hang</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row) => (
              
            <TableRow
              key={row.product?.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            ><Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {row._id}
            <MenuItem onClick={()=>handleconfirmOrder(row._id)}>Confirm</MenuItem>
            <MenuItem onClick={()=>handleShipOrder(row._id)}>Shipped</MenuItem>
            <MenuItem onClick={()=>deliveryOrder(row._id)}>Delivery</MenuItem>
          </Menu>
              <TableCell component="th" scope="row">
                <AvatarGroup max={3} sx={{justifyContent:'start'}} src={row.imageUrl}>
                  {row?.orderItems.map((item)=><Avatar src={item?.product?.imageUrl}/>)}
                </AvatarGroup>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.user._id}
              </TableCell>
              <TableCell align="right">{row.user.lastName}</TableCell>
              <TableCell align="right">{row.danhmuc}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right"><span className={`${row.paymentDetails.paymentStatus==="DANG XU LY"?"bg-[green]":
            row.paymentDetails.paymentStatus==="SHIPPED"?"bg-[red]":
            row.paymentDetails.paymentStatus==="PLACED"?"bg-[gray]":
            row.paymentDetails.paymentStatus==="PENDING"?"bg-[gray]":"bg-[red]"
            } text-white px-5 py-2 rounded full`}
            
            >{row.paymentDetails.paymentStatus}</span></TableCell>
              <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Status

      </Button>
      <Button onClick={()=>handleOrderDelete(row._id)} variant='outlined'>Xoa</Button>
      

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </div>
  )
}

export default OrdersTable
