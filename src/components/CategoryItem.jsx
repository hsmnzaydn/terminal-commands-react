import React from "react";
import {Grid, Paper, styled} from "@mui/material";
import "@fontsource/roboto"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#222833',
    padding: theme.spacing(3),
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}));

const CategoryItem = ({title, index, onClick}) => {
    return (
        <Grid item xs={12} sm={6} md={4} key={index} className='categoryItem' onClick={onClick}>
            <Paper elevation={3} style={{backgroundColor:'#222833'}}><Item>{title}</Item></Paper>
        </Grid>
    );
}

export default CategoryItem