import { ReturnAddressDto } from "src/address/dtos/returnAddress.dto";
import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
    constructor(userEntity: UserEntity) {
        this.id = userEntity.id,
        this.name = userEntity.name,
        this.username= userEntity.username,
        this.email = userEntity.email,
        this.phone = userEntity.phone,
        this.cpf = userEntity.cpf,
        this.address = userEntity.address ? userEntity.address.map((address) => new ReturnAddressDto(address)) : undefined;
    }
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    cpf: string;
    address?: ReturnAddressDto[];
  }