"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const jwt_strategy_1 = require("./jwt.strategy");
const constants_1 = require("./constants");
const users_module_1 = require("../users/users.module");
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const passport_1 = require("@nestjs/passport");
const local_stratagy_1 = require("./local.stratagy");
const jwt_1 = require("@nestjs/jwt");
const auth_controller_1 = require("./auth.controller");
const mailer_1 = require("@nestjs-modules/mailer");
const pug_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/pug.adapter");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule,
            users_module_1.UsersModule,
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: constants_1.jwtConstants.secret,
                signOptions: { expiresIn: '2h' },
            }),
            mailer_1.MailerModule.forRootAsync({
                useFactory: () => ({
                    transport: 'smtps://user@domain.com:pass@smtp.domain.com',
                    defaults: {
                        from: '"nest-modules" <modules@nestjs.com>',
                    },
                    template: {
                        dir: __dirname + '/templates',
                        adapter: new pug_adapter_1.PugAdapter(),
                        options: {
                            strict: true,
                        },
                    },
                }),
            }),
        ],
        providers: [auth_service_1.AuthService, local_stratagy_1.LocalStrategy, jwt_strategy_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map