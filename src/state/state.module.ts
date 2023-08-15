import { Module } from '@nestjs/common';
import { StateController } from './state.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateService } from './state.service';
import { StateEntity } from './entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService],
})
export class StateModule {}
