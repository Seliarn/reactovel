import React, {Component} from 'react';
import {Header} from './Header.js';
import ReactDOM from 'react-dom';
import {Sidebar} from "./Sidebar";
import {Content} from "./Content";
import {Footer} from "./Footer";
import {Auth} from "./Auth";

/* Main Component */
class Main extends Component {

    constructor() {

        super();
        //Initialize the state in the constructor
        this.state = {
            token: null
        }
    }

    checkAuth() {
    }

    render() {
        // let isLoggedIn = this.state.token;
        let isLoggedIn = true;
        /* Some css code has been removed for brevity */
        return (
            <div className = "container">
                <header className = "section-header">
                    <Header/>
                </header>
                <div className = "clearfix"></div>

                {isLoggedIn ? (
                    <section className = "wrapper row">
                        <aside className = "section-sidebar col-md-2">
                            <Sidebar/>
                        </aside>
                        <section className = "section-content col-md-10">
                            <Content/>
                        </section>
                    </section>
                ) : (
                    <section className = "section-auth row">
                        <Auth/>
                    </section>
                )}
                <div className = "clearfix"></div>
                <footer className = "section-footer">
                    <Footer/>
                </footer>
            </div>
        );
    }
}

export default Main;

/* The if statement is required so as to Render the component on pages that have a div with an ID of "root";
*/

if (document.getElementById('root')) {
    ReactDOM.render(<Main/>, document.getElementById('root'));
}