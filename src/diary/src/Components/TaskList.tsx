import React from 'react';
import { Component } from "react";
import "./styles.css"
import 'bootstrap/dist/css/bootstrap.css';
import { TaskEditor } from './TaskEditor';
import { TaskRow, ITask } from './TaskRow';
import { TaskStore } from '../Stores/TaskStore';
import { observer, inject } from 'mobx-react';

@inject('TaskStore')
@observer
export class TaskList extends Component<{TaskStore?: TaskStore}> {

    orderDataByTimeSlot() {
        let arr: Array<ITask> = [];
        for (let i = 0; i < 24; i++) {
            const tmp = this.props.TaskStore!.data.filter((t) => {
                return t.timeSlot == i;
            })
            let printTime = true;
            tmp.forEach((t) => {
                if (!printTime) {
                    t.timeSlot = -1;  
                }
                arr.push(t);
                printTime = false;
            })
        }
        return arr;
    }

    async componentDidMount() {
        this.props.TaskStore!.loadTasks();
    }

    render() {
        if (this.props.TaskStore!.isLoading) {
            return <div>loading...</div>
        }
        return (
            <div>
                {this.orderDataByTimeSlot().map((t: ITask) => {
                    return (
                        <TaskRow task={t.task} timeSlot={t.timeSlot}></TaskRow>
                    )
                })}
                <TaskEditor></TaskEditor>
            </div>
            
        );
    }


}