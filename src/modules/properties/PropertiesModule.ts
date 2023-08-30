import { Module } from '@nestjs/common';
import { PropertiesController } from './PropertiesController';
import { PropertiesService } from '../../services/properties';
import { HttpModule } from '@nestjs/axios';
import { PropertiesBussiness } from './PropertiesBussiness';
import { PropertiesResponse } from 'src/models/PropertiesResponse';

@Module({
    imports: [HttpModule, PropertiesResponse],
    controllers: [PropertiesController],
    providers: [PropertiesService, PropertiesBussiness],
})
export class PropertiesModule {}
