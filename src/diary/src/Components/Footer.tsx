import React, { Component } from 'react'
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css';

export class Footer extends Component<{}> {
    render() {
        return (
            <footer>
                <div className="footer"> (c) 2020 Dalibor Pantlík </div>
            </footer>
        );
    }
}