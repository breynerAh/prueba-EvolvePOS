import { CreateContactoService } from './contacto/createContacto.service';
import { DeleteContactoService } from './contacto/deleteContacto.service';
import { GetAllContactoService } from './contacto/getAllContacto.service';
import { GetOneContactoService } from './contacto/getOneContacto.service';
import { GetSearchContactoService } from './contacto/getSearchContacto.service';
import { UpdateContactoService } from './contacto/updateContacto.service';

export const SERVICES_USE_CASES = [
  GetAllContactoService,
  CreateContactoService,
  UpdateContactoService,
  DeleteContactoService,
  GetOneContactoService,
  GetSearchContactoService,
];
