import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacto } from 'src/domain/contacto/contacto.entity';
import { ContactoRepository } from 'src/infrastructure/repositories/contacto/contacto.repository';
import { ContactoController } from 'src/presentation/controllers/contacto/contacto.controller';
import { SERVICES_USE_CASES } from 'src/services/useCases';

@Module({
  imports: [TypeOrmModule.forFeature([Contacto])], // ✅ Necesario para usar InjectRepository
  controllers: [ContactoController],
  providers: [ContactoRepository, ...SERVICES_USE_CASES],
  exports: [...SERVICES_USE_CASES],
})
export class ContactoModule {}
