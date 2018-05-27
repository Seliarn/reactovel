import {RequestService} from "../../common/service/RequestService";
import {AuthService} from '../../auth/service/AuthService';

export class OrderService {

    getContentType(name) {
        switch (name) {
            case 'articles':
                return '/api/articles';
            default:
                return '';
        }
    };

    constructor() {
        this.headers = {'Authorization': 'Bearer '};// + localStorage.getItem('api_token')};
        this.requestService = new RequestService();
        this.authService = new AuthService();
    }

    createOrder(contentType, args) {

        let path = this.getContentType(contentType) + '/buy';

        let params = {
            method: 'POST',
            headers: this.headers
        };

        if (args && args.params) {
            params.body = JSON.stringify(args.params);
        }

        /*if (!this.authService.checkToken()) {
            return <Redirect to = "login"/>
        }*/

        return this.requestService.fetch(path, params).then(response => {
                if (response) {
                    console.log("Creating order: " + response);
                }

                return Promise.resolve(response);
            }
        );
    }
}