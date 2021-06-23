import React from 'react';

import { Grid } from '@material-ui/core';



import './secondyear.css';
import Content from '../components/content.js';




const secondyear=()=>{
   
    return(
        <React.Fragment>
           
    <Grid container direction="column"className="demo">
        <Grid item container>
            <Grid item xs={false} sm={2} />
                <Grid item xs={12} sm={8}>
                 <Content  />
                </Grid>
            <Grid item xs={false} sm={2} />
        </Grid>
    </Grid>
    </React.Fragment>
    );
}

export default secondyear;