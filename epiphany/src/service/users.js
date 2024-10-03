
const API_URL = "http://localhost:5038/Users/";

// export class UsersService {
//     constructor() {}

//     async getAllUsers() {
//         const response = fetch(this.API_URL+"Users")
//         const result = (await response).json()
//         return result
//     }
// }

export const getAllUsernames = async (username) => {

}

export const login = async (username) => {
    try {
        const API_URL_REQUEST = API_URL + "GetUser?username=" + username
        const response = await fetch("http://localhost:5038/Users/GetUser?username=nben7890")
        // if (!response.ok) {
        //     const errorData = await response.json()
        //     throw new
        // }
        const data = await response.json()
        return data
    } catch (error) {
        console.log("ERROR LOGGING IN")
    }
}

export const createNewUser = async (username, password) => {
    // First, check if username is already in database


    // Second, create new user if username not already in database
}

export const deleteUser = async (username) => {

}