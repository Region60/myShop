"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    console.log('создать файл constans с константами провайдеров');
    console.log('прописать в openapi, че возвращают');
    console.log('реализовать создание удаление проектов');
    console.log('вынести в common общие ДТО и интерфейсы');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('My FOREST')
        .setDescription('The TEST API description')
        .setVersion('1.0')
        .addTag('my forest')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.NODE_ENV === "production" ? process.env.PORT : 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map