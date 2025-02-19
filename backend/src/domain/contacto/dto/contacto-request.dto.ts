import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ContactoRequest {
  /**
   * nombre
   */
  @IsString()
  @IsNotEmpty()
  nombre: string;

  /**
   * telefono
   */
  @IsString()
  @IsNotEmpty()
  telefono: string;

  /**
   * email
   */
  @IsEmail()
  @IsNotEmpty()
  email: string;
}
