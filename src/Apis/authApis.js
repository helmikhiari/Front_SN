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


export async function forgetPasswordAPI(email) {
    try {
        const rep = await auth.post("/forgetPassword", { email })
        return { success: "Email Sent to " + email };
    } catch (error) {
        if (error.response.status === 404) {
            return { email: "User with this email does not exist" }
        }
        else {
            return { error: "Error Occured" }
        }
    }
}

export async function resetPasswordAPI(token, newPassword) {
    try {
        if (!token) {
            return false;
        }
        const rep =await auth.post("/resetPassword", { newPassword }, { headers: { 'Authorization': `Bearer ${token}` } })
        return 1;
    } catch (error) {
        if (error.response.status === 409) {
            return 2;
        }
        else
            return 0;
    }
}