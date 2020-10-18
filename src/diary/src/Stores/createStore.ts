import { ITask } from "../Components/TaskRow";
import { TaskStore } from "./TaskStore";


export function createStore(initialProducts: ITask[] = []) {
    const taskStore = new TaskStore(initialProducts);

    return {
        "TaskStore": taskStore
    }

}