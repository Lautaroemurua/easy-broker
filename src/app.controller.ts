import { Module } from '@nestjs/common';
import { PropertiesModule } from './modules/properties';
@Module({
  imports: [
    PropertiesModule
  ]
})
export class AppModule { }
