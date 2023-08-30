import { Test, TestingModule } from '@nestjs/testing';
import { PropertiesController } from '../src/modules/properties/PropertiesController';
import { PropertiesService } from '../src/services/properties';
import { ConfigModule } from '@nestjs/config';
import { PropertiesBussiness } from '../src/modules/properties/PropertiesBussiness';
let propertiesController: PropertiesController;

beforeEach(async () => {
  const app: TestingModule = await Test.createTestingModule({
    imports: [ConfigModule.forRoot()],
    controllers: [PropertiesController],
    providers: [PropertiesService, PropertiesBussiness],
  }).compile();

  propertiesController = app.get<PropertiesController>(PropertiesController);
});

describe('getAllProperties', () => {
  it('should return a PropertiesResponse object', async () => {
    const page = '1';
    const limit = '20';
    const mockPropertiesResponse = {
      "pagination": {
        "limit": 20,
        "page": 1,
        "total": 939,
        "next_page": "https://api.stagingeb.com/v1/properties?limit=20&page=2"
      },
      "content": [
        {
          "title": "oficinas en renta Santa Maria la Ribera",
        },
        {
          "title": "Departamento en venta Tecamachalco 4 recamaras",
        },
        {
          "title": "PH en venta colonia del valle con terraza",
        },
        {
          "title": "Departamento en venta colonia del valle",
        },
        {
          "title": "oficinas en renta Santa  Maria la Ribera",
        },
        {
          "title": "Departamento en venta Tecamachalco",
        },
        {
          "title": "Departamento en venta Tecamachalco 4 recamaras",
        },
        {
          "title": "PH en venta colonia del valle con terraza",
        },
        {
          "title": "Departamento en venta colonia del valle",
        },
        {
          "title": "oficinas en renta Santa  Maria la Ribera",
        },
        {
          "title": "DEPARTAMENTO EN RENTA EN VALLE PONIENTE",
        },
        {
          "title": "test",
        },
        {
          "title": "test",
        },
        {
          "title": "test",
        },
        {
          "title": "Departamento en renta Escandon",
        },
        {
          "title": "Departamento en venta Tecamachalco",
        },
        {
          "title": "DEPARTAMENTO EN RENTA EN EL AGUACATAL EN VALLE PONIENTE",
        },
        {
          "title": "DEPARTAMENTO EN RENTA EN VALLE ORIENTE EN SAN PEDRO GARZA GARCIA",
        },
        {
          "title": "DEPARTAMENTO EN RENTA EN VALLE PONIENTE",
        },
        {
          "title": "DEPARTAMENTO EN RENTA EN NUEVO SUR EN MONTERREY",
        },
      ]
    };

    const result = await propertiesController.getAllProperties(page, limit);

    expect(result).toEqual(mockPropertiesResponse);
  });
});
