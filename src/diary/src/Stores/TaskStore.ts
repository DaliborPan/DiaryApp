import { observable, action } from "mobx";
import { ITask } from "../Components/TaskRow";


export class TaskStore {
    @observable
    data: Array<ITask>;

    @observable
    isLoading: boolean;

    @observable
    inputTaskSlot: number;

    @observable
    inputTaskText: string;

    constructor(fixtures: ITask[]) {
        this.data = fixtures;
        this.isLoading = true;
        this.inputTaskSlot = -1;
        this.inputTaskText = '';
    }
    
    @action
    addTask = (e: React.FormEvent) => {
        fetch('http://localhost:8080/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                timeSlot: this.inputTaskSlot,
                task: this.inputTaskText,
                isFinished: false,
                created: '25.4.2020'
            })
        })
        e.preventDefault()
    }

    @action
    loadTasks = async () => {
        const resp = await fetch('http://localhost:8080/tasks');
        const fetchedData = await resp.json();
        this.data = fetchedData;
        this.isLoading = false;
    }

}