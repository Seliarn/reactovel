import {RequestService} from "./../../common/service/RequestService";

export class AuthService {
    // Initializing important variables
    constructor() {
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
        this.requestService = new RequestService();
    }

    login(email, password) {

        let path = 'login';

        let params = {
            credentials: 'include',
            body: JSON.stringify({
                email,
                password
            }),
            method: 'POST'
        };
        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            return this.getProfile();
            // params.headers = {'Authorization': 'Bearer ' + this.getToken()};
        }
        // Get a token from api server using the fetch api
        return this.requestService.fetch(this.path, params).then(res => {
            this.setToken(res.token) // Setting the token in localStorage
            return Promise.resolve(res);
        });
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken() // GEtting token from localstorage
        return !!token && !this.checkToken() // handwaiving here
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