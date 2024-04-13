import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { AccountOutLine,IconButton,CardContent,Card, CardHeader,Typography,Avatar, Box, Grid} from '@mui/material'
const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color:'primary',
    icon: <TrendingUpIcon sx={{fontSize:"1.75rem"}}></TrendingUpIcon>
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color:'success',
    icon: <AccountCircleIcon sx={{fontSize:"1.75rem"}}></AccountCircleIcon>
  },
  {
    stats: '1.5k',
    title: 'Products',
    color:'warning',
    icon: <TrendingUpIcon sx={{fontSize:"1.75rem"}}></TrendingUpIcon>
  },
  {
    stats: '12.5k',
    title: 'Revenue',
    color:'info',
    icon: <TrendingUpIcon sx={{fontSize:"1.75rem"}}></TrendingUpIcon>
  }
]
 
const renderStats = ()=>{
  return salesData.map((item, index)=>(
    <Grid item xs={12} sm={3} key={index}>
      <Box sx={{
        display:'flex',
        alignItems:'center'
      }}>
        <Avatar variant='rounded' sx={{
          mr:0.5,
          width: 44,
          height: 44,
          boxShadow:3,
          color: "white",
          background:`green`,
          
        }}>
          <span className='p-10'> {item.icon}</span>
         
        </Avatar>
        <Box sx={{
          display:'flex',
          flexDirection:'column'
        }}>

        </Box>
        <Typography variant='caption'>
          {item.title}
        </Typography>
        <Typography variant='caption'>
          {item.stats}
        </Typography>
      </Box >

    </Grid>
  ))
}
const MonthlyView = () => {
  return (
    <Card>
      <CardHeader
      title="Monthly Overview"
      action={
        <IconButton size='small'>
          <MoreVertIcon/>
        </IconButton>
        
      }
      subheader={
        <Typography variant='body2'>
          <Box component='span' sx={{fontWeight:600, color:'text.primary'}}>
            Total 48.5% growth

          </Box>
          This month
        </Typography>
       
      }
      titleTypographyProps={{
        sx:{
          mb: 2.5,
          lineHeight:'2rem !important',
          letterSpacing: '.15px !important'
        }
      }}
      />
    <CardContent sx={{pt:theme=>`${theme.spacing(3)} !important`}}>
      <Grid container spacing={[5,0]}>
          {renderStats()}
      </Grid>
    </CardContent>
      
    </Card>
  )
}

export default MonthlyView
//1:02