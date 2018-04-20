import {RequestService} from "./../../common/service/RequestService";

export class AuthService {
    // Initializing important variables
    constructor() {
        this.login = this.login.bind(this);
        this.checkToken = this.checkToken.bind(this);
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
            return this.getApiToken();
            // params.headers = {'Authorization': 'Bearer ' + this.getToken()};
        }
        // Get a token from api server using the fetch api
        return this.requestService.fetch(path, params).then(res => {
                if (res.data && typeof res.data.token !== 'undefined') {
                    this.setToken(res.data.token); // Setting the token in localStorage
                }
                return Promise.resolve(res);
            }
        );
    }

    logout() {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('token');
    }

    setToken(idToken) {
        // Saves user token to localStorage
        localStorage.setItem('token', idToken);
        localStorage.setItem('token_expiration', time() + 86400);
    }

    getApiToken() {
        // Retrieves the user token from localStorage
        let token = localStorage.getItem('token');
        return (token && typeof token !== 'undefined') ? token : false;
    }


    isTokenExpired() {
        return !!Date.now() < localStorage.getItem('token_expiration')
    }

    checkToken() {
        // Retrieves the user token from localStorage
        return this.getApiToken()
            && this.isTokenExpired();
    }

    loggedIn() {
        // Checks if there is a saved token and it's still valid
        let token = this.getApiToken(); // GEtting token from localstorage
        return !!token && !this.checkToken() // handwaiving here
    }
}