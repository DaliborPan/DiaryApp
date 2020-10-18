import React from 'react';
import { Component } from "react";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';

export interface ITask {
    task: string,
    timeSlot: number
}

export class TaskRow extends Component<ITask> {
    render() {
        if (this.props.timeSlot != -1) {
            return (
                <div className="row">
                    <div className="col-4"> { this.props.timeSlot }:00 - { this.props.timeSlot + 1 }:00  </div>
                    <div className="col-8"> { this.props.task } </div>
                </div>
            );
        }
        return (
            <div className="row">
                <div className="col-4"></div>
                <div className="col-8"> { this.props.task } </div>
            </div>
        );
    }
}