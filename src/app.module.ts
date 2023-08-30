import { Module } from '@nestjs/common';
import { PropertiesModule } from './modules/properties';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PropertiesModule,
    HttpModule
  ],
  providers: [PropertiesModule],
})
export class AppModule { }
