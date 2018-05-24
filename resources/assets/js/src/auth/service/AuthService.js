import {RequestService} from "./../../common/service/RequestService";

export class AuthService {
    // Initializing important variables
    constructor() {
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.check = this.check.bind(this);
        this.getApiToken = this.getApiToken.bind(this);
        this.checkToken = this.checkToken.bind(this);
        this.saveToken = this.saveToken.bind(this);
        this.deleteToken = this.deleteToken.bind(this);
        this._getApiToken = this._getApiToken.bind(this);
        this._getApiTokenExpire = this._getApiTokenExpire.bind(this);

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

        return this.requestService.fetch(path, params).then(
            response => {
                if (response.data && typeof response.data.api_token !== 'undefined' && typeof response.data.api_token_expire !== 'undefined') {
                    this.saveToken(response.data.api_token, response.data.api_token_expire); // Setting the token in localStorage
                    console.log('Logged', this.getApiToken());
                }

                return Promise.resolve(response);
            }
        );
    }

    logout() {
        let path = 'logout';
        let params = {
            method: 'POST'
        };

        return this.requestService.fetch(path, params).then(
            response => {
                if (response.data) {
                    console.log('Logged out', response.data);
                }

                // Clear user token and profile data from localStorage
                this.deleteToken();

                return Promise.resolve(response);
            }
        );
    }

    check() {
        let api_token = this._getApiToken();
        let path = 'refresh';
        let params = {
            method: 'POST',
            body: JSON.stringify({
                api_token
            }),
        };

        return this.requestService.fetch(path, params).then(
            response => {
                if (response.data && typeof response.data.api_token !== 'undefined' && typeof response.data.api_token_expire !== 'undefined') {
                    this.saveToken(response.data.api_token, response.data.api_token_expire); // Setting the token in localStorage
                    console.log('Logged', this.getApiToken());
                }

                return Promise.resolve(response);
            }
        );
    }

    getApiToken() {
        return this._getApiToken();
    }

    isTokenExpired(timestamp) {
        return !!(Date.now() / 1000) < timestamp
    }

    checkToken() {
        let token = this._getApiToken();
        let api_token_expire = this._getApiTokenExpire();

        return token && !this.isTokenExpired(api_token_expire);
    }


    /**
     * Private methods
     */

    _getApiToken() {

        let api_token = this._getDataFromLocalStorage('api_token');

        if (!api_token || typeof api_token === 'undefined') {
            console.log('Undefined api_token');
            return false;
        }

        return api_token;
    }

    _getApiTokenExpire() {

        let api_token_expire = this._getDataFromLocalStorage('api_token_expire');

        if (!api_token_expire || typeof api_token_expire === 'undefined') {
            console.log('Undefined api_token_expire');
            return false;
        }

        return api_token_expire;
    }

    saveToken(token, expiration) {
        // Saves user token to localStorage
        this._setDataToLocalStorage('api_token', token);
        this._setDataToLocalStorage('api_token_expire', expiration);
    }

    deleteToken() {
        // Saves user token to localStorage
        this._unsetDataFromLocalStorage('api_token');
        this._unsetDataFromLocalStorage('api_token_expire');
    }

    _setDataToLocalStorage(field, value) {
        localStorage.setItem(field, value);
    }

    _unsetDataFromLocalStorage(field) {
        localStorage.removeItem(field);
    }

    _getDataFromLocalStorage(field) {
        localStorage.getItem(field);
    }
}