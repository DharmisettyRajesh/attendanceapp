import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import {green} from '@material-ui/core/colors';
import {CardMedia} from '@material-ui/core'
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import Icon from '@material-ui/core/Icon';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import {Alert,AlertTitle} from '@material-ui/lab';
//import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';


//import { makeStyles} from '@material-ui/core/styles';

//import Button from '../shared/Elements/Button';


const useStyles = makeStyles((theme)=>({
  root: {
    minWidth: 275,
    padding: 5,
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
  button: {
    margin: theme.spacing(1),
  },
  button1: {
    margin: theme.spacing(1),
  },
  root1: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

  const DemoCard=(props)=> {
    const [color,setcolor]=useState("primary");
    const [color1,setcolor1]=useState("secondary");
    const classes = useStyles();
    const {rollno,email,caption,name,image}=props;
    const present=async()=>{
      setcolor("green");
    const response = await fetch('https://registerattendance.herokuapp.com/firstyear/attendance',{
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
    setcolor1("green");
    const response = await fetch('https://registerattendance.herokuapp.com/firstyear/attendance',{
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        rollno:rollno,
        attend:'absent'
      })
    })
    const responsedata=await response.json()

  }
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
          className={classes.button}
         startIcon={<CloudUploadIcon />} 
         onClick={(rollno)=>present(rollno)
         }>
           PRESENT
           </Button>
        <Button variant="contained"
         color={color1} 
         className={classes.button1}
         startIcon={<CloudUploadIcon />} 
         onClick={(rollno)=>absent(rollno)
         }>
           ABSENT
         </Button>
      </CardActions>
    </Card>
  );
}
export default DemoCard;