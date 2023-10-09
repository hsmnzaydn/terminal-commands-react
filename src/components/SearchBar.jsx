import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar({onChangeListener}) {

    return (
        <Paper
            component="form"
            sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                bgcolor: '#4f5666',
                borderRadius: 10,
                elevation: 24
            }}
        >
            <InputBase
                sx={{ml: 1, flex: 1, color: '#ffffff'}}
                placeholder="Search Commands"
                inputProps={{'roboto': 'search google maps'}}
                onChange={onChangeListener}

            />
            <IconButton type="button" sx={{p: '10px', color: '#fff'}} aria-label="search">
                <SearchIcon/>
            </IconButton>

        </Paper>
    );
}