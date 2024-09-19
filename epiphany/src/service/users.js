
const API_URL = "http://localhost:5038/";

export class UsersService {
    constructor() {}

    async getAllUsers() {
        const response = fetch(this.API_URL+"Users")
        const result = (await response).json()
        return result
    }
}
