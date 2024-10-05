const API_URL = "http://localhost:5038/Users/";

// Get all users
export const getAllUsernames = async (username) => {
    try {
        const API_URL_REQUEST = API_URL + "GetAll"
        const response = await fetch(API_URL_REQUEST)
        const result = response.json()
        return result
    } catch(error) {
        console.error("Error creating new account", error)
    }
}

// get Specific user
export const login = async (username) => {
    try {
        const API_URL_REQUEST = API_URL + "GetUser?username=" + username
        const response = await fetch(API_URL_REQUEST)
        const data = await response.json()
        return data
    } catch (error) {
        console.log("ERROR LOGGING IN")
    }
}

// create new user
export const createNewUser = async (username, password) => {
    try {
        const API_URL_REQUEST = API_URL + "CreateUser?username=" + username + "&password=" + password
        const response = await fetch(API_URL_REQUEST)
        return response
    } catch(error) {
        console.error("Error creating new account")
    }
}

// delete user
export const deleteUser = async (username) => {

}