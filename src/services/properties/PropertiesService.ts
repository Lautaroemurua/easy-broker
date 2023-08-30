import { Injectable, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PropertiesResponse } from 'src/models/PropertiesResponse';

@Injectable()
export class PropertiesService {
  private readonly apiKey;
  private readonly apiName;

  constructor(
    private configService: ConfigService
  ) {
    this.apiKey = this.configService.get('API_KEY');
    this.apiName = this.configService.get('API_NAME');
  }

  async getAllPropertiess(page: string, limit: string): Promise<PropertiesResponse> {
    try {
      const sdk = require('api')(this.apiName);

      sdk.auth(this.apiKey);
      const propertiesRequest = await sdk.getProperties({ page, limit })
        .then(({ data }) => data)
        .catch(err => console.error(err));

      return propertiesRequest;
    } catch (error) {
      console.error(new Error(`getAllProperties :: ${error}, HTTP Status: ${HttpStatus.FORBIDDEN}`));
    }
  }
}
