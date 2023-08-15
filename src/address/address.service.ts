import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from './entities/address.entity';
import { Repository } from 'typeorm';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(AddressEntity)
        private readonly addressRespository: Repository<AddressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService,
    ) {}

    async createAdress(createAdressDto: CreateAddressDto, userId: number) : Promise<AddressEntity> {
        await this.userService.findUserById(userId);
        await this.cityService.findCityById(createAdressDto.cityId);
        return this.addressRespository.save({
            ...createAdressDto,
            userId,
        })
    }
}
