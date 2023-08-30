import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PropertiesService } from '../../services/properties';
import { PropertiesResponse } from '../../models/PropertiesResponse';

@Injectable()
export class PropertiesBussiness {

  constructor(private propertiesService: PropertiesService) { }

  async getAllProperties(page:string, limit:string): Promise<PropertiesResponse> {
    try {
      const properties = await this.propertiesService.getAllPropertiess(page, limit);

      if (!properties) {
        console.error('getAllProperties :: No hay propiedades para mostrar.');
        throw new HttpException({ message: `No se pudieron obtener propiedades` }, HttpStatus.BAD_REQUEST);
      }

      const propertiesParsed : PropertiesResponse = new PropertiesResponse();

      propertiesParsed.pagination = properties.pagination;
      propertiesParsed.content = properties.content.map((item) => {
        return {
          title: item.title
        }
      });

      if (!propertiesParsed.content.length) {
        console.error('getAllProperties :: No hay propiedades para mostrar.');
        throw new HttpException({ message: `No se pudieron obtener propiedades` }, HttpStatus.BAD_REQUEST);
      }

      return propertiesParsed;

    } catch (error) {
      console.error(new Error(`getAllProperties :: Error in List all properties: ${error}`));
      throw new HttpException({ message: `Error in List all properties: ${error}` }, HttpStatus.BAD_REQUEST);
    }
  }
}
