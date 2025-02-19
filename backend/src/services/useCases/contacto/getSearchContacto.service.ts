import { Contacto } from 'src/domain/contacto/contacto.entity';
import { ContactoRepository } from '../../../infrastructure/repositories/contacto/contacto.repository';
import { Injectable } from '@nestjs/common';
import { ContactoUpdateRequest } from 'src/domain/contacto/dto/contacto-update.dto';
import { FindOptionsWhere } from 'typeorm';

@Injectable()
export class GetSearchContactoService {
  constructor(private readonly contactoRepository: ContactoRepository) {}

  async getSearchContacto(
    request: ContactoUpdateRequest,
  ): Promise<Contacto | null> {
    const searchCriteria: FindOptionsWhere<Contacto> = {};

    if (request.email) {
      searchCriteria.email = request.email;
    }
    if (request.telefono) {
      searchCriteria.telefono = request.telefono;
    }
    if (request.nombre) {
      searchCriteria.nombre = request.nombre;
    }

    const result = await this.contactoRepository.findOne({
      where: searchCriteria,
    });

    return result;
  }
}
