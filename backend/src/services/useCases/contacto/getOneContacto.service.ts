import { Contacto } from 'src/domain/contacto/contacto.entity';
import { ContactoRepository } from '../../../infrastructure/repositories/contacto/contacto.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetOneContactoService {
  constructor(private readonly contactoRepository: ContactoRepository) {}

  async getOneContacto(id: number): Promise<Contacto | null> {
    const result = await this.contactoRepository.findOne({ where: { id } });
    return result;
  }
}
