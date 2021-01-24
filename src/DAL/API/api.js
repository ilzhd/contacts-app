import axios from "axios";


let instance = axios.create({
    baseURL: 'http://demo.sibers.com/'
})

export const usersApi = {
    getUsers(){
        return instance.get(`users`)
            .then(response => {
                return response.data
            })
    }
}