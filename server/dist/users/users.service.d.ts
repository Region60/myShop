import { ResponseUserDto } from './dto/response-user.dto';
import { Role } from '../roles/role.enum';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { MailService } from 'src/mail/mail.service';
export declare class UsersService {
    private userRepository;
    private mailServise;
    constructor(userRepository: Repository<User>, mailServise: MailService);
    private generateString;
    create(createUserDto: CreateUserDto): Promise<string>;
    findAll(): Promise<ResponseUserDto[]>;
    findOneById(id: number): Promise<{
        id: number;
        userName: string;
        email: string;
        phone: string;
        roles: Role;
        registerDate: Date;
        confirmRegister: string;
        orders: import("../order/entities/order.entity").Order[];
    }>;
    findOneByEmail(email: string): Promise<User>;
    confirmRegister(confirmRegister: string): Promise<import("typeorm").UpdateResult>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("typeorm").UpdateResult>;
    updatePass(id: number, password: string): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    confirmReg(email: string, unicString: string): Promise<import("typeorm").UpdateResult>;
    changeRole(id: string, role: Role): Promise<import("typeorm").UpdateResult>;
    confirmEmail(confirmRegister: string): Promise<import("typeorm").UpdateResult>;
}
