import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contacto } from './domain/contacto/contacto.entity';
import { ContactoModule } from './infrastructure/repositories/contacto/contacto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'postgres',
      entities: [Contacto],
      synchronize: true,
    }),
    ContactoModule,
  ],
  controllers: [],
  providers: [],
})
@Global()
export class AppModule {}
