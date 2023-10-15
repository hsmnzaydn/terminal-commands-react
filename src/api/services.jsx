import {http} from "./client";
import {v4 as uuidv4} from 'uuid';

let categories = JSON.parse(localStorage.getItem("categories"))

const getUserToken = async () => {
    if (sessionStorage.getItem("authorizationKey") === null){
        return  await http.post("/api/accounts", {
            pnsToken: uuidv4(),
            udid: uuidv4()
        }, {
            timeout: 5000
        }).then(function (response) {
            sessionStorage.setItem("authorizationKey", "Bearer " + response.data['data']['authozationKey']);
        })
    }else {
        return sessionStorage.getItem("authorizationKey");
    }
}

const searchCommand = async (query) => {
    return await http.get("/api/commands", {
        params: {
            commandTitle: query
        }
    }, {
        headers: {
            Authorization: sessionStorage.getItem('authorizationKey'),
            'app-language': 'EN'
        },
        timeout: 5000
    })
}

const getCategories = async () => {
    if (categories && categories.length) {
        return categories
    }

    const response = await http.get("/api/categories", {}, {
        headers: {
            Authorization: sessionStorage.getItem('authorizationKey'),
            'app-language': 'EN'
        },
        timeout: 5000
    });
    localStorage.setItem('categories', JSON.stringify(response.data['data']));

    return response.data['data']
}

const getCategoryDetail = async (categoryId) => {

    if (localStorage.getItem(categoryId) === null) {
        const response = await http.get("/api/categories/" + categoryId + "/commands", {}, {
            headers: {
                Authorization: sessionStorage.getItem('authorizationKey'),
                'app-language': 'EN'
            },
            timeout: 5000
        });
        const commands = response.data['data']
        localStorage.setItem(categoryId, JSON.stringify(commands));

        return commands
    } else {
        const commands = JSON.parse(localStorage.getItem(categoryId))
        return commands
    }

}

const searchCategoryDetailCommands  = (categoryId,query) =>{
    const commands = JSON.parse(localStorage.getItem(categoryId))
    return commands.filter(command =>
        command.title.toLowerCase().includes(query.toLowerCase()) ||
        command.description.toLowerCase().includes(query.toLowerCase())
    );
}

export {getUserToken, getCategories, searchCommand, getCategoryDetail,searchCategoryDetailCommands}