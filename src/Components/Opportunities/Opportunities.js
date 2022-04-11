import React from 'react';
import Typography from '@mui/material/Typography';
import CreateCard from "../Card/CreateCard";
import Card from "../Card/Card";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './Opportunities.css';

export default function Opportunities() {
  return (
    <div className="opp_general">
        <div style={{backgroundColor: 'white', width: '100%', textAlign: 'center'}}>
            <Typography sx={{ fontWeight: 600, fontSize: 24, m: 1.5 }}>Opportunities</Typography>
        </div>
        <div className="opp_content">
            
            
            {/* <div className='opp_content_cards'> */}
                {/* <div style={{width:'50%'}}>
                    <Card />
                </div>
                <div style={{width:'50%'}}>
                    <Card />
                </div>
                <div style={{width:'50%'}}>
                    <Card />
                </div>
                <div style={{width:'50%'}}>
                    <Card />
                </div> */}
            <Grid container direction={'row'}  alignItems="center">
                <Grid sx={{display:'flex', justifyContent:'center'}} item xs={12}>
                    <CreateCard heading="Create Post" plholder="What do you want to ask or share?" width="100%" />
                </Grid>
                <Grid sx={{m:0, p:0, display:'flex', justifyContent:'center'}} item xs={12} sm={6}>
                    <Card width='100%'/>
                </Grid>
                <Grid sx={{m:0, p:0, display:'flex', justifyContent:'center'}} item xs={12} sm={6}>
                    <Card width='100%'/>
                </Grid>
                <Grid sx={{m:0, p:0, display:'flex', justifyContent:'center'}} item xs={12} sm={6}>
                    <Card width='100%' />
                </Grid>
                <Grid sx={{m:0, p:0, display:'flex', justifyContent:'center'}} item xs={12} sm={6}>
                    <Card width='100%'/>
                </Grid>
            </Grid>
            {/* </div> */}
        </div>
    </div>
  )
}
