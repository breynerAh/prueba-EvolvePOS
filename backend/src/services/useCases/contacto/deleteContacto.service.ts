import { BadRequestException, Injectable } from '@nestjs/common';
import { ContactoResponse } from 'src/domain/contacto/dto/contacto-response.dto';
import { ContactoRepository } from '../../../infrastructure/repositories/contacto/contacto.repository';

@Injectable()
export class DeleteContactoService {
  constructor(private readonly contactoRepository: ContactoRepository) {}

  async deleteContacto(id: number): Promise<ContactoResponse> {
    try {
      return await this.contactoRepository.delete(id);
    } catch {
      throw new BadRequestException('Ha ocurrido un error');
    }
  }
}
