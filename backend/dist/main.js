"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./shared/filters/http-exception.filter");
const success_response_interceptor_1 = require("./shared/interceptors/success-response.interceptor");
const swagger_1 = require("@nestjs/swagger");
const express = require("express");
const path = require("path");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new success_response_interceptor_1.SuccessResponseInterceptor());
    console.log("env port", process.env.PORT);
    app.setGlobalPrefix('api');
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Your API')
        .setDescription('API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    console.log("path.join(__dirname, '..', 'uploads')", path.join(__dirname, '..', 'src/uploads'));
    app.use('/uploads', express.static(path.join(__dirname, '..', 'src/uploads')));
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map