import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red,green } from '@material-ui/core/colors';
import {CardMedia} from '@material-ui/core'
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
  },
  media: {
    height: 100,
  // 16:9
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  avatar: {
    backgroundColor: red[500],
  },
  style1:{
    backgroundColor:'linear-gradient(45deg,#FE6B8B 30%,#FF8E53 90%)',
    border:0,
    borderRadius:3,

  },
  style1:{
    backgroundColor:'linear-gradient(45deg,#FE6B8B 30%,#FF8E53 90%)',
    border:0,
    borderRadius:3,

  },
  button:{
   margin: theme.spacing(1),
  }
}));

  const DemoCard=(props)=> {
    const[color,setcolor]=useState("primary");

    const[color1,setcolor2]=useState("secondary");
  const classes = useStyles();
  const present=async()=>{
    setcolor("green");
    const response = await fetch('https://registerattendance.herokuapp.com/fourthyear/attendance',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        rollno:rollno,
        attend:'present'
      })
    })
    const responsedata=await response.json()

  }
  const absent=async()=>{
    setcolor2("green");
    const response = await fetch(
      'https://registerattendance.herokuapp.com/fourthyear/attendance',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        rollno:rollno,
        attend:'absent'
      })
    })
    const responsedata=await response.json()

  }
  
  const {rollno,email,caption,name,image}=props;
  return (
    <Card className={classes.root}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {caption}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <DriveEtaOutlinedIcon/>
          </IconButton>
        }
        title={email}
      />
       <CardMedia
        className={classes.media}
        image= {image}
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {rollno}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button variant="contained" 
        color={color} 
        startIcon={<CloudUploadIcon />} 
        className={classes.button}
        onClick={present}>PRESENT</Button>
        <Button variant="contained" 
        color={color1} 
        startIcon={<CloudUploadIcon />} 
        className={classes.button}
         onClick={absent}>ABSENT</Button>

      </CardActions>
    </Card>
  );
}
export default DemoCard;