import { IsEmail, IsOptional, IsString } from 'class-validator';

export class ContactoUpdateRequest {
  /**
   * nombre
   */
  @IsString()
  @IsOptional()
  nombre: string;

  /**
   * telefono
   */
  @IsString()
  @IsOptional()
  telefono: string;

  /**
   * email
   */
  @IsEmail()
  @IsOptional()
  email: string;
}
