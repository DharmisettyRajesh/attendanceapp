import React from 'react';
import {useState,useEffect} from 'react'
import { Grid } from '@material-ui/core';



import './fourthyear.css';
import Content from '../components/content.js';




const fourthyear=()=>{
    
    return( 
    <Grid container direction="column"className="demo">
        <Grid item container>
            <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                 <Content />
                </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    </Grid>
     
    );
}

export default fourthyear;