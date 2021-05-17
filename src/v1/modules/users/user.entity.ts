import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
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

  @Column()
   created_at: Date;

   @Column()
   updated_at: Date;
}