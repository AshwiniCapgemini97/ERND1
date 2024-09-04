import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { SectorsModule } from './sectors/sectors.module';
// import { AppFilter } from './app.filter';
import { TechnologiesModule } from './technologies/technologies.module';
import { PortfoliosModule } from './portfolios/portfolios.module';
import { AssetTypesModule } from './asset_types/asset_types.module';
import { BusinessFunctionsModule } from './business_functions/business_functions.module';
import { GroupsModule } from './groups/groups.module';
import { AssetsModule } from './assets/assets.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MailModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AssetRatingsModule } from './asset_ratings/asset_ratings.module';
import { RolesModule } from './roles/roles.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
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
      inject: [ConfigService],

    }),
    SectorsModule, TechnologiesModule,
    PortfoliosModule, AssetTypesModule, BusinessFunctionsModule, GroupsModule, AssetsModule, MailModule, UsersModule, AuthModule, AssetRatingsModule, RolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
