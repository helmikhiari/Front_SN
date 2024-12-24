import axios from "axios";

const user = axios.create({ baseURL: "http://localhost:5000/user" })

export async function getUser()
{
    try 
    {   const token=localStorage.getItem("token")
        if (!token)
        {
            return false;
        }
        
        const rep=await user.get("/getuser",{headers:{"Authorization":`Bearer ${token}`}}) 
           return rep.data;
    } 
    catch (error) {
        return false;
    }
}

export async function toggleProduct(productID)
{
    try
    {
        const token=localStorage.getItem("token")
        if (!token)
        {
            return false;
        }
        const rep=await user.patch("/toggleProduct",{productID}
            ,{headers:{"Authorization":`Bearer ${token}`}}
        );
        console.log(rep.data)
        return true
    }
    catch(error)
    {   console.log(error)
        return false;
    }
}