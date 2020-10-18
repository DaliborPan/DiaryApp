import React from 'react';
import { Component } from "react";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';
import { observer, inject } from 'mobx-react';
import { TaskStore } from '../Stores/TaskStore';

@inject('TaskStore')
@observer
export class TaskEditor extends Component<{TaskStore?: TaskStore}> {

    handleTaskChange = (e: { target: { value: any; }; }) => {
        this.props.TaskStore!.inputTaskText = e.target.value;
    }

    handleTimeChange = (e: { target: { value: any; }; }) => {
        this.props.TaskStore!.inputTaskSlot = e.target.value;
    }

    handleSubmit = (e: React.FormEvent) => {
        this.props.TaskStore!.addTask(e);
    }

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.props.TaskStore!.inputTaskSlot} onChange={this.handleTimeChange} placeholder="Your time slot..." />
                    <input type="text" value={this.props.TaskStore!.inputTaskText} onChange={this.handleTaskChange} placeholder="Your task..." />
                    <input type="submit" value="Add todo" />
                </form>
        )
    }
}
