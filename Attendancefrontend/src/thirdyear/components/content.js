import React from 'react';
import Card from './Card'
import {Grid} from '@material-ui/core';
import data from './data';

const content =()=>{
    const get=(obj)=>{
        return(
            <Grid item xs={12} sm={4}>
                <Card  {...obj}/>
             </Grid>
        );
    }
    return (
        <Grid container spacing={2}>
          
                {data.map(obj=>get(obj)) }
            
        </Grid>
    )
}
export default content;