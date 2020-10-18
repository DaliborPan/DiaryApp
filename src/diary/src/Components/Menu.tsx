import React from 'react';
import { Component } from "react";
import "./styles.css"

interface IMainMenu {
    name: string
}
export class MainMenu extends Component<IMainMenu> {
    render() {
        return (
            <nav className="nav-container">
                <div className="menu-item menu-item--brand">
                    Diary
                </div>
                <div className="menu-item">
                    Week view
                </div>
                <div className="menu-item">
                    Month view
                </div>        
            </nav>
        );
    }
}