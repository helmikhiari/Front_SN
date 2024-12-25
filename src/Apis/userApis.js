import axios from "axios";

const user = axios.create({ baseURL: "http://localhost:5000/user" })

export async function getUser() {
    try {
        const token = localStorage.getItem("token")
        if (!token) {
            return false;
        }

        const rep = await user.get("/getuser", { headers: { "Authorization": `Bearer ${token}` } })
        return rep.data;
    }
    catch (error) {
        return false;
    }
}

export async function toggleProduct(productID) {
    try {
        const token = localStorage.getItem("token")
        if (!token) {
            return false;
        }
        const rep = await user.patch("/toggleProduct", { productID }
            , { headers: { "Authorization": `Bearer ${token}` } }
        );
        console.log(rep.data)
        return true
    }
    catch (error) {
        console.log(error)
        return false;
    }
}

export async function updateCartAPI(cartID, quantity) {
    try {
        const token = localStorage.getItem("token")
        if (!token) {
            return false;
        }
        console.log("cart id" + cartID)
        const rep = await user.put("/updateCart", { cartID, quantity }, { headers: { "Authorization": `Bearer ${token}` } })
        return true;
    }
    catch (error) {
        console.log("error is " + error)
        return false;
    }
}


export async function addToCartAPI(productDetailID, quantity) {
    try {
        const token = localStorage.getItem("token")
        if (!token) {
            return false;
        }
        const rep = await user.post("/addToCart", { productDetailID, quantity }, { headers: { "Authorization": `Bearer ${token}` } })
        console.log("Rep", rep.data);
        return rep.data;
    }
    catch (error) {
        console.log("error is " + error)
        return false;
    }
}



export async function deleteFromCartAPI(cartID) {
    try {
        const token = localStorage.getItem("token")
        if (!token) {
            return false;
        }
        const rep = await user.delete(`/deleteFromCart/${cartID}`, { headers: { "Authorization": `Bearer ${token}` } })
        return true;
    }
    catch (error) {
        console.log("error is " + error)
        return false;
    }
}

