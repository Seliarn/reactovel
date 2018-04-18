import {RequestService} from "../../common/service/RequestService";

export class AuthService {
    // Initializing important variables
    constructor(path) {
        this.path = path || 'login' // API server domain
        this.RequestService = new RequestService();
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }

    login(email, password) {
        // Get a token from api server using the fetch api
        return this.RequestService.fetch(this.path, {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => {
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
        });
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.isTokenExpired(token) // handwaiving here
    }

    /*
        isTokenExpired(token) {
            try {
                const decoded = decode(token);
                if (decoded.exp < Date.now() / 1000) { // Checking if token is expired. N
                    return true;
                }
                else
                    return false;
            }
            catch (err) {
                return false;
            }
        }
    */

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('token', idToken)
        localStorage.setItem('token_expiration', time() + 86400);
    }

    getToken() {
        // Retrieves the user token from localStorage
        return localStorage.getItem('token')
    }

    checkToken() {
        // Retrieves the user token from localStorage
        return (
            localStorage.getItem('token')
            && localStorage.getItem('token_expiration')
            && (time() < localStorage.getItem('token_expiration'))
        );
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('token');
    }

    getProfile() {
        // Using jwt-decode npm package to decode the token
        return this.getToken();
    }
}