import React from "react";
import {Grid, Paper, styled} from "@mui/material";
import "@fontsource/roboto"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: '#222833',
    padding: theme.spacing(8),
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'roboto'
}));
const CategoryItem = ({title, index,onClick}) => {
    return (
        <Grid item xs={2} sm={4} md={4} key={index} className='categoryItem' onClick={onClick}>
            <Paper elevation={3} style={{backgroundColor:'#222833'}}><Item>{title}</Item></Paper>
        </Grid>

    );
}

export default CategoryItem