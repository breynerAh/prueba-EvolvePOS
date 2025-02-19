import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'contactos',
})
export class Contacto {
  /**
   * id
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * nombre
   */
  @Column({ type: 'varchar', nullable: false })
  nombre: string;

  /**
   * telefono
   */
  @Column({ type: 'varchar', nullable: false, length: 10 })
  telefono: string;

  /**
   * email
   */
  @Column({ type: 'varchar', nullable: false })
  email: string;

  /**
   * createDate
   */
  @CreateDateColumn({ type: 'timestamp' })
  createDate: Date;

  /**
   * updateDate
   */
  @UpdateDateColumn({ type: 'timestamp' })
  updateDate: Date;

  /**
   * deleteDate
   */
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleteDate: Date | null;
}
