import { IsInt, IsString } from 'class-validator';
export class CreateAddressDto {
  @IsString()
  name: string;
  
  @IsString()
  complement: string;

  @IsInt()
  numberAddress: number;

  @IsString()
  cep: string;

  @IsInt()
  cityId: number;

}
