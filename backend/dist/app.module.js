"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const typeorm_1 = require("@nestjs/typeorm");
const app_service_1 = require("./app.service");
const sectors_module_1 = require("./sectors/sectors.module");
const technologies_module_1 = require("./technologies/technologies.module");
const portfolios_module_1 = require("./portfolios/portfolios.module");
const asset_types_module_1 = require("./asset_types/asset_types.module");
const business_functions_module_1 = require("./business_functions/business_functions.module");
const groups_module_1 = require("./groups/groups.module");
const assets_module_1 = require("./assets/assets.module");
const config_1 = require("@nestjs/config");
const mail_module_1 = require("./mail/mail.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const asset_ratings_module_1 = require("./asset_ratings/asset_ratings.module");
const roles_module_1 = require("./roles/roles.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DATABASE_HOST'),
                    port: +configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE'),
                    "entities": ["dist/**/*.entity{.ts,.js}"],
                    synchronize: true,
                    autoLoadEntities: true,
                }),
                inject: [config_1.ConfigService],
            }),
            sectors_module_1.SectorsModule, technologies_module_1.TechnologiesModule,
            portfolios_module_1.PortfoliosModule, asset_types_module_1.AssetTypesModule, business_functions_module_1.BusinessFunctionsModule, groups_module_1.GroupsModule, assets_module_1.AssetsModule, mail_module_1.MailModule, users_module_1.UsersModule, auth_module_1.AuthModule, asset_ratings_module_1.AssetRatingsModule, roles_module_1.RolesModule
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map