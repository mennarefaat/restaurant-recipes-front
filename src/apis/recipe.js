import axios from "axios"

const Recipe = axios.create({
    baseURL:"http://localhost:8080",
   
})

export default Recipe