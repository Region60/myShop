import { Role } from '../../roles/role.enum';
import { CreateUserDto } from "./create-user.dto";
declare const ResponseUserDto_base: import("@nestjs/common").Type<Omit<CreateUserDto, "userPassword" | "confirmRegister">>;
export declare class ResponseUserDto extends ResponseUserDto_base {
    id: number;
    roles: Role;
}
export {};
