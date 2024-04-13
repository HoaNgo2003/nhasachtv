import React, { useEffect } from 'react'
import {store} from "../../State/Store.js"
import {deleteProduct, findProducts} from "../../State/Product/Action.js"
import {TableContainer,Card,CardHeader,Button,Table,Avatar,TableBody,TableHead, TableRow,TableCell} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import { addItemToCart } from '../../State/Cart/Action.js'
const ProductsTable = () => {
  const dispatch = useDispatch()
  const {product} = useSelector(store=>store)
  const handleProductDelete = (productId)=>{
    dispatch(deleteProduct(productId))
  }
  useEffect(()=>{
    dispatch(findProducts())
  },[product.deleteProduct])
  console.log(product)
  return (
    <div className='p-5 '>
      <Card className='mt-2 p-5'>
      <CardHeader title='All Products'>
      
      </CardHeader>
      <TableContainer  >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>Hinh anh</TableCell>

            <TableCell>Ten san pham</TableCell>
            <TableCell align="right">So luong</TableCell>
            <TableCell align="right">Danh muc</TableCell>
            <TableCell align="right">Gia</TableCell>
            <TableCell align="right">Ma san pham</TableCell>
            <TableCell>Xoa</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {product?.products?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Avatar src={row.imageUrl}></Avatar>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.quanity}</TableCell>
              <TableCell align="right">{row.danhmuc}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">#{row._id}</TableCell>
            <Button onClick={()=>handleProductDelete(row._id)} variant='outlined'>Xoa</Button>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
     
    </div>
  )
}

export default ProductsTable
