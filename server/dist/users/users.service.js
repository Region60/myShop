"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const role_enum_1 = require("../roles/role.enum");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const bcrypt = require("bcrypt");
const mail_service_1 = require("../mail/mail.service");
let UsersService = class UsersService {
    constructor(userRepository, mailServise) {
        this.userRepository = userRepository;
        this.mailServise = mailServise;
    }
    generateString() {
        const abc = 'abcdefghijklmnopqrstuvwxyz0123456789';
        let randomString = '';
        while (randomString.length < 10) {
            randomString += abc[Math.floor(Math.random() * abc.length)];
        }
        return randomString;
    }
    async create(createUserDto) {
        const candidate = await this.userRepository.findBy({
            email: createUserDto.email,
        });
        if (!candidate[0]) {
            const randomString = this.generateString();
            const { userPassword } = createUserDto;
            const hashPassword = await bcrypt.hash(userPassword, 10);
            createUserDto.userPassword = hashPassword;
            createUserDto.confirmRegister = randomString;
            this.mailServise.sendMessageReg(createUserDto.email, randomString, createUserDto.userName);
            const response = await this.userRepository.insert(createUserDto);
            if (response.generatedMaps.length)
                return 'The record has been successfully created.';
        }
        else {
            return `a user with ${createUserDto.email} already exists`;
        }
        return 'The record has been successfully created.';
    }
    async findAll() {
        return await this.userRepository.find({
            select: {
                id: true,
                userName: true,
                registerDate: true,
                phone: true,
                email: true,
                roles: true,
            },
        });
    }
    async findOneById(id) {
        const _a = await this.userRepository.findOneBy({
            id,
        }), { userPassword } = _a, user = __rest(_a, ["userPassword"]);
        return user;
    }
    async findOneByEmail(email) {
        return await this.userRepository.findOneBy({ email });
    }
    async confirmRegister(confirmRegister) {
        return await this.userRepository.update({ confirmRegister }, { roles: role_enum_1.Role.USER });
    }
    async update(id, updateUserDto) {
        return await this.userRepository.update(id, Object.assign({}, updateUserDto));
    }
    async updatePass(id, password) {
        const hashPassword = await bcrypt.hash(password, 10);
        return await this.userRepository.update(id, { userPassword: hashPassword });
    }
    async remove(id) {
        return await this.userRepository.delete(id);
    }
    async confirmReg(email, unicString) {
        const { id } = await this.userRepository.findOneBy({ email });
        return await this.userRepository.update(id, {
            confirmRegister: unicString,
        });
    }
    async changeRole(id, role) {
        return await this.userRepository.update(+id, { roles: role });
    }
    async confirmEmail(confirmRegister) {
        const { id } = await this.userRepository.findOneBy({ confirmRegister });
        return await this.userRepository.update(id, { roles: role_enum_1.Role.USER });
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USERS_REPOSITORY')),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        mail_service_1.MailService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map