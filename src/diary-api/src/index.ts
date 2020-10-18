import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {Task} from "./entity/Task";

createConnection().then(async connection => 
{
    const tasks = connection.getRepository(Task);
    
    if (!(await tasks.find()).length) {  
        console.log("Inserting a new task into the database...");
        const task = new Task();
        task.isFinished = false;
        task.task = "Get up";
        task.created = "30.4.2020";
        task.timeSlot = 1;
        tasks.save(task);
    }
    console.log("Loading tasks from db...");
    (await tasks.find()).forEach(task => {
        console.log(task);
    });

}).catch(error => console.log(error));
