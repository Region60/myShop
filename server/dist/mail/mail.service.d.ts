import { HttpService } from '@nestjs/axios';
export declare class MailService {
    private readonly httpService;
    constructor(httpService: HttpService);
    private createListContact;
    private registerMailCreator;
    createMailMessage(link: string, recipientName: string): Promise<import("rxjs").Observable<import("axios").AxiosResponse<any, any>>>;
    private getList;
    sendMessageReg(email: string, randomString: string, recipientName: string): Promise<void>;
}
