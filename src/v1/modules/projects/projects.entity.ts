import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import {User} from '../users/user.entity'

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    project_name: string;

    @Column({default: true})
    is_active:boolean

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    @ManyToOne(() => User, user => user.project)
    user: User;
}