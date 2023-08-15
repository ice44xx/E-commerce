import { AddressEntity } from "../entities/address.entity";
export class ReturnAddressDto {
    constructor(addressEntity: AddressEntity) {
        this.id = addressEntity.id,
        this.name = addressEntity.name,
        this.complement= addressEntity.complement,
        this.numberAddress = addressEntity.numberAddress,
        this.cep = addressEntity.cep
    }
    id: number;
    name: string;
    complement: string;
    cep: string;
    numberAddress: number;
  }