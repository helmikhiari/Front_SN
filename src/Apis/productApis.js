import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/product"


export async function getAllProducts() {
    try {
        console.log("env=" + process.env.REACT_APP_BASE_URL)
        const rep = await axios.get('/getallproducts');
        return rep.data;
    } catch (error) {
        console.log(error);
        return false;
    }
}