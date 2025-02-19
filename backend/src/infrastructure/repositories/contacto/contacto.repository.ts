import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from 'src/domain/contacto/contacto.entity';
import {
  DeepPartial,
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export class ContactoRepository {
  constructor(
    @InjectRepository(Contacto)
    private readonly repository: Repository<Contacto>,
  ) {}

  async findAll(options?: FindManyOptions<Contacto>): Promise<Contacto[]> {
    try {
      return await this.repository.find(options);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async findOne(options: FindOneOptions<Contacto>): Promise<Contacto | null> {
    try {
      return await this.repository.findOne(options);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async create(request: DeepPartial<Contacto>): Promise<Contacto> {
    try {
      const result: InsertResult = await this.repository.insert(request);
      const newContacto = await this.repository.findOne({
        where: { id: result.identifiers[0].id as number },
      });
      if (!newContacto) {
        throw new HttpException('No se pudo recuperar el registro', 500);
      }
      return newContacto;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async update(
    id: number,
    request: QueryDeepPartialEntity<Contacto>,
  ): Promise<Contacto> {
    try {
      await this.repository.update(id, request);
      const updatedContacto = await this.repository.findOne({ where: { id } });
      if (!updatedContacto) {
        throw new HttpException(
          'No se pudo recuperar el registro actualizado',
          500,
        );
      }
      return updatedContacto;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async remove(id: number): Promise<string> {
    try {
      const deleteContacto = await this.repository.findOne({ where: { id } });
      if (!deleteContacto) {
        throw new HttpException('No se pudo recuperar el registro', 500);
      }
      await this.repository.delete(id);
      return 'Eliminación exitosa';
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }

  async delete(id: number): Promise<Contacto> {
    try {
      const deleteContacto = await this.repository.findOne({ where: { id } });
      if (!deleteContacto) {
        throw new HttpException('No se pudo recuperar el registro', 500);
      }
      await this.repository.softDelete(id);
      return deleteContacto;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Error';
      throw new HttpException(errorMessage, 500);
    }
  }
}
