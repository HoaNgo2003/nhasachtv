import React, { useEffect } from 'react'
import {Grid, TextField, Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'
import { useDispatch ,useSelector} from 'react-redux'
import { getUSer, login } from '../../State/Auth/Action'
import Swal from 'sweetalert2'
const Login = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate()
    const jwt = localStorage.getItem('jwt');
    const {auth} = useSelector(store=>store)
    useEffect(()=>{
        if(jwt){
            dispatch(getUSer(jwt));
        }
    },[jwt,auth.jwt])

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const userData = {
          
            password: data.get("password"),
            email: data.get("email")
        }
        dispatch(login(userData));
        
        console.log(userData)
    }
    
        if(jwt){
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
        Toast.fire({
          icon: "success",
          title: "Đăng nhập thành công"
        });
      }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
             
             
            <Grid item xs={12} >
                <TextField
                required
                autoComplete='email'
                id='email'
                name='email'
                label = 'Email'
                fullWidth
                />

                 
            </Grid>
            <Grid item xs={12}>
                <TextField
                required
                autoComplete='passord'
                id='password'
                name='password'
                label = 'Password'
                fullWidth
                type='password'
                />

                 
            </Grid>
            <Grid item sx={12} sm={12}>
                <Button
                className='bg-[#9155FD] w-full'
                type='submit'
                variant='contained'
                size='large'
                sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
                >
                    Đăng nhập
                </Button>
            </Grid>
        </Grid>
      </form>
      <div className='flex  justify-center flex-col items-center'>
      <div className='py-3 flex items-center '>
        <p className=' flex    '>Chua co tai khoan? </p>   
        <Button onClick={()=>navigate("/register")} className='ml-5' size='small'>Đăng ky ngay</Button>
      </div>
      </div>
    </div>
  )
}

export default Login;
