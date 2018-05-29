import React, {Component} from 'react';
import {Contacts} from './common/Contacts';

export class Footer extends Component {
    render() {
        /* Some css code has been removed for brevity */
        return (
            <div className="row footer">
                <div className="col-md-2">
                    <div id="logo">
                    </div>
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-8">
                    <Contacts/>
                </div>
            </div>
        );
    }
}