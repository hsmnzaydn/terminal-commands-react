import React, {useEffect, useState} from "react";
import {getCategories, getUserToken, searchCommand} from "../api/services";
import CategoryItem from "../components/CategoryItem";
import {Box, Grid} from "@mui/material";
import SearchBar from "../components/SearchBar";
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getUserToken().then(() =>{
            fetchCategories()
        })
    }, []);

    async function fetchCategories() {
        try {
            const categories = await getCategories()
            setCategories(categories)
        } catch (error) {
        }
    }




    function navigateCategoryDetail(id) {
        navigate("/categories/" + id)
    }

    return (

        <div>
            <Box sx={{flexGrow: 1, margin: 8}}>
                <div style={{marginTop: '32px'}}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                        {categories.map((_, index) => (
                            <CategoryItem title={_.title} index={index} onClick={() => navigateCategoryDetail(_.id)}/>
                        ))}
                    </Grid>
                </div>
            </Box>
        </div>
    )
}

export default Home