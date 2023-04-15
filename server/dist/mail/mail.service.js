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
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const mail_enum_1 = require("./mail.enum");
let MailService = class MailService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    async createListContact(theme) {
        return await this.httpService.axiosRef.post(`${mail_enum_1.Mail.HOSTMAIL}createList?format=json&api_key=${process.env.MAIL_API_KEY}&title=${theme}`);
    }
    registerMailCreator(randomString, recipientName) {
        return `<h2>Здраствуйте ${recipientName}</h2>  Для завершения регистрации перейдите по ссылке:
    <p>
    <a href=" ${process.env.URL}/auth/confirm/${randomString}">Подверждение электронной почты</a>
    </p> 
    <p>Если вы получили это письмо случайно, просто удалите его</p>`;
    }
    async createMailMessage(link, recipientName) {
        const listId = await this.createListContact('register');
        return await this.httpService.post(`${mail_enum_1.Mail.HOSTMAIL}createEmailMessage?format=json&api_key=${process.env.MAIL_API_KEY}&sender_name=ThressCo&sender_email=${mail_enum_1.Mail.SENDER_EMAIL}&subject=registration&body=${this.registerMailCreator(link, recipientName)}&list_id=${listId}`);
    }
    async getList() {
        const list = await this.createListContact('register');
        const response = await this.httpService.axiosRef.post(`${mail_enum_1.Mail.HOSTMAIL}getLists?format=json&api_key=${process.env.MAIL_API_KEY}`);
        return response;
    }
    async sendMessageReg(email, randomString, recipientName) {
        const encodingUri = encodeURI(`${mail_enum_1.Mail.HOSTMAIL}sendEmail?format=json&api_key=${process.env.MAIL_API_KEY}&email=${email}&sender_name=Admin&sender_email=${mail_enum_1.Mail.SENDER_EMAIL}&subject=Registration&list_id=37&error_checking=1&track_read=1&body=${this.registerMailCreator(randomString, recipientName)}`);
        const response = await this.httpService.axiosRef.post(encodingUri);
        if (response.data.error)
            console.log({ mailServiceError: response.data.error });
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], MailService);
exports.MailService = MailService;
//# sourceMappingURL=mail.service.js.map