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