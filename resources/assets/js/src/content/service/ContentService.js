import {RequestService} from "./../../common/service/RequestService";
import {AuthService} from './../../auth/service/AuthService';

export class ContentService {

    getContentType(name) {
        switch (name) {
            case 'articles':
                return '/api/articles';
                break;
            default:
                return false;
        }
    };

    constructor() {
        this.headers = {'Authorization': 'Bearer '};// + localStorage.getItem('api_token')};
        this.requestService = new RequestService();
        this.authService = new AuthService();
    }

    getContent(contentType, args) {

        let path = this.getContentType(contentType);

        let params = {
            method: 'GET',
            headers: this.headers
        };

        if (args && args.params) {
            params.body = JSON.stringify(args.params);
        }

        /*if (!this.authService.checkToken()) {
            return <Redirect to = "login"/>
        }*/

        return this.requestService.fetch(path, params).then(res => {
                if (res.data) {
                    console.log('Returned: ', res.data.meta.totalCount);
                }
                return Promise.resolve(res.data);
            }
        );
    }

    createContent(contentType, args) {
        let path = this.getContentType(contentType);

        let params = {
            method: args.method,
            headers: this.headers
        };

        if (args.params) {
            params.body = JSON.stringify(args.params);
        }

        /*if (!this.authService.checkToken()) {
            return <Redirect to = "login"/>
        }*/

        return this.requestService.fetch(path, params).then(res => {
                if (res.data) {
                    console.log('Returned: ', res.data.meta.totalCount);
                }
                return Promise.resolve(res.data);
            }
        );
    }
}