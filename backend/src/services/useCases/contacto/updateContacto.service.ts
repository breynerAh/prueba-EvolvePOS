import { BadRequestException, Injectable } from '@nestjs/common';
import { ContactoResponse } from 'src/domain/contacto/dto/contacto-response.dto';
import { ContactoUpdateRequest } from 'src/domain/contacto/dto/contacto-update.dto';
import { ContactoRepository } from '../../../infrastructure/repositories/contacto/contacto.repository';

@Injectable()
export class UpdateContactoService {
  constructor(private readonly contactoRepository: ContactoRepository) {}

  async updateContacto(
    id: number,
    request: ContactoUpdateRequest,
  ): Promise<ContactoResponse> {
    try {
      return await this.contactoRepository.update(id, request);
    } catch {
      throw new BadRequestException('Ha ocurrido un error');
    }
  }
}
