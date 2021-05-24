import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { EntityRepository, Repository } from "typeorm";
import {User} from './user.entity'

@Injectable()
@EntityRepository(User)
export default class UserRepository extends Repository<User> {}