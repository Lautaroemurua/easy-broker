import { Controller, Get, Query } from '@nestjs/common';
import { PropertiesBussiness } from './PropertiesBussiness';
import { ApiHeader, ApiTags } from '@nestjs/swagger';
import { PropertiesResponse } from 'src/models/PropertiesResponse';

@ApiTags('List all properties with pagination')
@ApiHeader(
  {
  name: 'Authorization',
  description: 'Api key for authorization',
})
@Controller('properties')
export class PropertiesController {
  constructor(
    private readonly propertiesBussiness: PropertiesBussiness,
  ) { }

  @Get()
  getAllProperties(@Query('page') page: string, @Query('limit') limit: string): Promise<PropertiesResponse> {
    return this.propertiesBussiness.getAllProperties(page, limit);
  }
}
