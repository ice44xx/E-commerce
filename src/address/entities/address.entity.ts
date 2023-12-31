/* eslint-disable prettier/prettier */
import { CityEntity } from 'src/city/entities/city.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'city_id', nullable: false })
  cityId: number;

  @Column({ name: 'name', nullable: false })
  name: string;

  @Column({ name: 'complement'})
  complement: string;

  @Column({ name: 'cep', nullable: false })
  cep: string;

  @Column({ name: 'number', nullable: false })
  numberAddress: number;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.address)
  @JoinColumn({name: 'user_id', referencedColumnName: 'id'})
  user?: UserEntity

  @ManyToOne(() => CityEntity, (city) => city.address)
  @JoinColumn({name: 'city_id', referencedColumnName: 'id'})
  city?: CityEntity;
}
