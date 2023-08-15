import { Controller, Param, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressService } from './address.service';
import { AddressEntity } from './entities/address.entity';


@Controller('address')
export class AddressController {

    constructor(private readonly addressService: AddressService) {}

    @Post('/:userId')
    @UsePipes(ValidationPipe)
    async createAdress(@Body() createAdressDto: CreateAddressDto, @Param('userId') userId: number) : Promise <AddressEntity> {
        return this.addressService.createAdress(createAdressDto, userId);
    }
}
