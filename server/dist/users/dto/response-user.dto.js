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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseUserDto = void 0;
const role_enum_1 = require("../../roles/role.enum");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const create_user_dto_1 = require("./create-user.dto");
class ResponseUserDto extends (0, swagger_1.OmitType)(create_user_dto_1.CreateUserDto, ['userPassword', 'confirmRegister']) {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], ResponseUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(role_enum_1.Role),
    (0, swagger_1.ApiProperty)({ enum: ['user', 'admin', 'root', 'unconfirmed'] }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "roles", void 0);
exports.ResponseUserDto = ResponseUserDto;
//# sourceMappingURL=response-user.dto.js.map