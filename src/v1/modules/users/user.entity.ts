import { Entity, Column, PrimaryGeneratedColumn, OneToMany, CreateDateColumn, UpdateDateColumn, Unique } from 'typeorm';
import {Project} from '../projects/projects.entity';
import { UserDto } from './dto/user.dto';

@Entity()
@Unique(['email'])
export class User {

  constructor(partial: Partial<UserDto>) {
    Object.assign(this, partial);
  }
  
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  github: string;

  @Column({ default: true })
  is_active: boolean;

  @CreateDateColumn({ type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at: Date;

  @OneToMany(() => Project, project => project.user)
  project: Project;
}