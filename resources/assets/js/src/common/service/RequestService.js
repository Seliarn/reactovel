export class RequestService {
    constructor(path, args = {}) {
        this.path = path; // API server domain
        this.options = args.options || {method: 'GET'}; // API server domain
        this.headers = args.headers || {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        this.fetch = this.fetch.bind(this) // React binding stuff
    }

    fetch(path, options) {
        // performs api calls sending the required authentication headers
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        // Setting Authorization header
        // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer ' + this.getToken()
        }

        return fetch(path, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json())
    }

    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response
        } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
        }
    }
}