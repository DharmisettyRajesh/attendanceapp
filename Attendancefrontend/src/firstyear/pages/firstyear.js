import React,{ useCallback } from 'react';
import { Grid } from '@material-ui/core';

//import Spinner from '../shared/impcomponents/Spinner';
//import ErrorModal from '../shared/impcomponents/ErrorModal';
import './firstyear.css';
import Content from '../components/content.js';
//import Http from '../shared/Hooks/http.js';




const firstyear=()=>{
    

    return(
        <React.Fragment> 
        
        <Grid container direction="column"className="demo">
        <Grid item container>
            <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                 <Content   />
                </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    </Grid>
    </React.Fragment>
    );
    }

export default firstyear;