import { ResponseUserDto } from './dto/response-user.dto';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Role } from 'src/roles/role.enum';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<string>;
    findAll(): Promise<ResponseUserDto[]>;
    findOne(id: any): Promise<ResponseUserDto>;
    update(req: any, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatePass(req: any, body: any): Promise<import("typeorm").UpdateResult>;
    remove(id: any): Promise<import("typeorm").DeleteResult>;
    changeRole(id: any, role: Role): Promise<import("typeorm").UpdateResult>;
    confirmEmail(uniqValue: any): Promise<import("typeorm").UpdateResult>;
}
