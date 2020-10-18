import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {

       @PrimaryGeneratedColumn()
       id: number;

       @Column()
       timeSlot: number;

       @Column()
       task: string;

       @Column()
       isFinished: boolean;

       @Column()
       created: string;
}

