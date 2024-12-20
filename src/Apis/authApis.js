import axios from "axios";

const auth = axios.create({ baseURL: "http://localhost:5000/auth" })
export async function login(credentials) {
    try {

        const rep = await auth.post("/login", credentials);
        return rep.data;
    }
    catch (error) {
        if (error.response.status == 404)
            return { email: "Account with this email not found" }
        else if (error.response.status == 401)
            return { password: "Wrong Password" }
        else
            return { error: "Error Occured . Please try again later." }
    }
}