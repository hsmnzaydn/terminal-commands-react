import React from "react";
import {Grid, Paper, styled} from "@mui/material";
import "@fontsource/roboto"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#222833',
    padding: theme.spacing(2),
    color: '#fff',
    fontFamily: 'Roboto'
}));
const CommandItem = ({title, index,description}) => {
    return (
        <Grid item xs={12} key={index} >
            <Paper elevation={3} style={{backgroundColor:'#222833'}}>
                <Item>
                    <b>{title}</b>
                    <div style={{backgroundColor:'#222833', color:'#fff', paddingTop:'8px'}}>{description}</div>
                </Item>
            </Paper>
        </Grid>

    );
}

export default CommandItem