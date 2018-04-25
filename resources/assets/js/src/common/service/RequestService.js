export class RequestService {
    constructor() {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        };

        this.fetch = this.fetch.bind(this) // React binding stuff
    }

    fetch(path, options) {
        options.headers = {...options.headers, ...this.headers};
        console.log(path, options);
        return fetch(path, options)
            .then(response => response.json())
            .catch(error => console.log(error.statusText))
    }


    _checkStatus(response) {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) { // Success status lies between 200 to 300
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
}