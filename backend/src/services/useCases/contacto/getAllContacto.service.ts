import { Contacto } from 'src/domain/contacto/contacto.entity';
import { ContactoRepository } from '../../../infrastructure/repositories/contacto/contacto.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllContactoService {
  constructor(private readonly contactoRepository: ContactoRepository) {}

  async getAllContacto(): Promise<Contacto[]> {
    const result = await this.contactoRepository.findAll();
    console.log(result);
    return result;
  }
}
