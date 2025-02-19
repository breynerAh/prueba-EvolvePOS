import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContactoRequest } from 'src/domain/contacto/dto/contacto-request.dto';
import { ContactoResponse } from 'src/domain/contacto/dto/contacto-response.dto';
import { ContactoUpdateRequest } from 'src/domain/contacto/dto/contacto-update.dto';
import { CreateContactoService } from '../../../services/useCases/contacto/createContacto.service';
import { GetAllContactoService } from '../../../services/useCases/contacto/getAllContacto.service';
import { DeleteContactoService } from '../../../services/useCases/contacto/deleteContacto.service';
import { UpdateContactoService } from '../../../services/useCases/contacto/updateContacto.service';
import { GetOneContactoService } from '../../../services/useCases/contacto/getOneContacto.service';

@Controller('contacto')
@ApiTags('Contacto')
export class ContactoController {
  constructor(
    private readonly getAllContactoService: GetAllContactoService,
    private readonly createContactoService: CreateContactoService,
    private readonly updateContactoService: UpdateContactoService,
    private readonly deleteContactoService: DeleteContactoService,
    private readonly getOneContactoService: GetOneContactoService,
  ) {}

  @Get('/:id')
  @ApiOperation({ summary: 'Obtener un contacto' })
  async getOneContacto(
    @Param('id') id: number,
  ): Promise<ContactoResponse | null> {
    return await this.getOneContactoService.getOneContacto(id);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todos los contacto' })
  async getAllContacto(): Promise<ContactoResponse[]> {
    return await this.getAllContactoService.getAllContacto();
  }

  @Post('/create')
  @ApiOperation({ summary: 'Crear un contacto' })
  async createContacto(
    @Body() contactoRequest: ContactoRequest,
  ): Promise<ContactoResponse> {
    return await this.createContactoService.createContacto(contactoRequest);
  }

  @Put('/update/:id')
  @ApiOperation({ summary: 'Actualizar un contacto' })
  async updateContacto(
    @Param('id') id: number,
    @Body() contactoRequest: ContactoUpdateRequest,
  ): Promise<ContactoResponse> {
    return await this.updateContactoService.updateContacto(id, contactoRequest);
  }

  @Delete('/delete/:id')
  @ApiOperation({ summary: 'Eliminar un contacto' })
  async deleteContacto(@Param('id') id: number): Promise<ContactoResponse> {
    return await this.deleteContactoService.deleteContacto(id);
  }
}
