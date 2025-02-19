import { ContactoRepository } from '../../../infrastructure/repositories/contacto/contacto.repository';
import { BadRequestException, Injectable } from '@nestjs/common';
import { ContactoRequest } from 'src/domain/contacto/dto/contacto-request.dto';
import { ContactoResponse } from 'src/domain/contacto/dto/contacto-response.dto';

@Injectable()
export class CreateContactoService {
  constructor(private readonly contactoRepository: ContactoRepository) {}

  async createContacto(request: ContactoRequest): Promise<ContactoResponse> {
    try {
      return await this.contactoRepository.create(request);
    } catch {
      throw new BadRequestException('Ha ocurrido un error');
    }
  }
}
