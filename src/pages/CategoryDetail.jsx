import {useParams} from "react-router-dom";
import {getCategoryDetail, searchCategoryDetailCommands} from "../api/services";
import React, {useEffect, useState} from "react";
import {Box, Grid} from "@mui/material";
import CommandItem from "../components/CommandItem";
import SearchBar from "../components/SearchBar";

const CategoryDetail = () => {
    const query = useParams()
    const categoryId = query['id']


    const [commands, setCommands] = useState([])

    useEffect(() => {
       getCommandsOfCategory()
    }, []);

    async function getCommandsOfCategory() {
        try {
            const categories = await getCategoryDetail(categoryId)
            setCommands(categories)
        } catch (e) {

        }
    }
    const search = (e) =>{
        if (e.target.value === ""){
            getCommandsOfCategory()
        }else {
            setCommands(searchCategoryDetailCommands(categoryId,e.target.value))
        }
    }

    return (
        <div>
            <div>
                <Box sx={{flexGrow: 1, margin: 8}}>
                   <SearchBar onChangeListener={search}/>

                    <div style={{marginTop: '32px'}}>
                        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                            {commands.map((_, index) => (
                                <CommandItem key={index} title={_.title} index={index} description={_.description}/>
                            ))}
                        </Grid>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default CategoryDetail