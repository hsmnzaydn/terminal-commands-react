import React, {useEffect, useState} from "react";
import {getCategories, getUserToken, searchCommand} from "../api/services";
import CategoryItem from "../components/CategoryItem";
import {Box, Grid} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {initializeApp} from "firebase/app";

const Home = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD6h_b-XL4kG6cwTn1bpSRb_uRNERT5AKE",
        authDomain: "terminal-commands-e34f5.firebaseapp.com",
        projectId: "terminal-commands-e34f5",
        storageBucket: "terminal-commands-e34f5.appspot.com",
        messagingSenderId: "955991291842",
        appId: "1:955991291842:web:5d0234e9eaa79a5c0e885b",
        measurementId: "G-0ZS3PR45YX"
    };

    initializeApp(firebaseConfig);
    const navigate = useNavigate();

    const [categories, setCategories] = useState([])

    useEffect(() => {
       getToken();
    }, []);

    async function fetchCategories() {
        try {
            const categories = await getCategories()
            setCategories(categories)
        } catch (error) {
            sessionStorage.setItem("authorizationKey", null);
            getToken()
        }
    }

    function getToken(){
        getUserToken().then(() => {
            fetchCategories()
        })
    }
    const search = (e) => {
        if (e.target.value === "") {
            fetchCategories()
        } else {
            searchCommand(e.target.value)
        }
    }


    function navigateCategoryDetail(id) {
        navigate("/categories/" + id)
    }

    return (

        <div>
            <Box sx={{flexGrow: 1, margin: 8}}>
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <img src='/logo.png' alt='logo' style={{width: '20%', height: '20%', maxWidth: '100px', maxHeight: '100px'}}/>
                    <div style={{color: '#fff', fontFamily: 'roboto', fontSize: '2em', fontWeight: 'bold', marginTop: '8px'}}>
                        Linux Terminal Commands
                    </div>
                </div>
                <div style={{marginTop: '32px'}}>
                    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 6, sm: 8, md: 12}}>
                        {categories.map((_, index) => (
                            <CategoryItem key={index} title={_.title} index={index} onClick={() => navigateCategoryDetail(_.id)} />
                        ))}
                    </Grid>
                </div>
            </Box>
        </div>
    )
}

export default Home