import {RequestService} from "./../../common/service/RequestService";

export class AuthService {
    // Initializing important variables
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.getApiToken = this.getApiToken.bind(this);
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
        if (this.checkToken()) {
            console.log('Already logged:', this.getApiToken());
            return this.getApiToken();
        }

        return this.requestService.fetch(path, params).then(res => {
                if (res.data && typeof res.data.api_token !== 'undefined' && typeof res.data.api_token_expire !== 'undefined') {
                    this._setToken(res.data.api_token, res.data.api_token_expire); // Setting the token in localStorage
                    console.log('Logged', this.getApiToken());
                }
                return Promise.resolve(res);
            }
        );
    }

    logout() {
        let path = 'logout';
        let params = {
            method: 'POST'
        };

        return this.requestService.fetch(path, params).then(res => {
                if (res.data && typeof res.data.api_token !== 'undefined' && typeof res.data.api_token_expire !== 'undefined') {
                    this._setToken(res.data.api_token, res.data.api_token_expire); // Setting the token in localStorage
                    console.log('Logged', this.getApiToken());
                }
                return Promise.resolve(res);
            }
        );

        // Clear user token and profile data from localStorage
        this._unsetToken();
    }

    getApiToken(check = false) {
        return this._getToken();
    }


    isTokenExpired(timestamp) {
        return !!(Date.now() / 1000) < timestamp
    }

    checkToken() {
        let token = this._getToken();
        if (token && this.isTokenExpired(token.api_token_expire)) {
            return true;
        }

        return false;
    }


    /**
     * Private methods
     */

    _getToken(token, expiration) {

        let api_token = localStorage.getItem('api_token');
        let api_token_expire = localStorage.getItem('api_token_expire');

        if (!api_token || typeof api_token === 'undefined') {
            console.log('Undefined api_token');
            return false;
        }
        if (!api_token_expire || typeof api_token_expire === 'undefined') {
            console.log('Undefined api_token_expire');
            return false;
        }

        return {
            api_token: api_token,
            api_token_expire: api_token_expire
        };
    }

    _setToken(token, expiration) {
        // Saves user token to localStorage
        localStorage.setItem('api_token', token);
        localStorage.setItem('api_token_expire', expiration);
    }

    _unsetToken(token, expiration) {
        localStorage.removeItem('api_token');
        localStorage.removeItem('api_token_expire');
    }
}