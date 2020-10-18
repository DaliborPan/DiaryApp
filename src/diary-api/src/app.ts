import "reflect-metadata";
import {createConnection, getConnection} from "typeorm";
import {Task} from "./entity/Task";
import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import cors = require('cors');


createConnection().then(async connection => 
    {
        const app = express();
        const port = 8080;
        const tasks = connection.getRepository(Task);
        
        app.use(bodyParser.json());
        app.use(cors());
        
        app.get("/tasks", async function(req: Request, res: Response) {
            res.header("Access-Control-Allow-Origin");
            const tasks = await connection.getRepository(Task).find();
            res.json(tasks);
        });
    
        app.get('/tasks/all/time-slot/:time', async function(req: Request, res: Response) {   
            const time = req.params.time;
            const result = await tasks.find(
                { where: 
                    { timeSlot: time } 
                });
            res.json(result);
        });
    
        app.get('/tasks/:id', async function(req: Request, res: Response) {
            const result = await tasks.find({
                where: 
                  { id: req.params.id }
              });
            return res.send(result);
        });
    
        app.post('/tasks', async function(req: Request, res: Response) {
            const task = connection.getRepository(Task).create(req.body);
            const result = await connection.getRepository(Task).save(task);
            return res.send(result);
        });
    
        app.put("/tasks/:id", async function(req: Request, res: Response) {
            const task = await tasks.findOne(req.params.id);
            tasks.merge(task, req.body);
            const result = await tasks.save(task);
            return res.send(result);
        });
    
        app.delete("/tasks/:id", async function(req: Request, res: Response) {
            await tasks.delete(req.params.id);
            return res.status(202);
        });
    
        app.listen(port, async function() {
            console.log("Loading tasks from db...");
            (await tasks.find())
                .forEach(task => {
                    console.log(task);
                });


            console.log("App is listening on port 8080...");
        });
        
    }).catch(error => console.log(error));