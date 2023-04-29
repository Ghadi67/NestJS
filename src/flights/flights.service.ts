/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flights } from './flights.entity';

@Injectable()
export class FlightsService {
  constructor(
    @InjectRepository(Flights)
    private readonly FlightsRepository: Repository<any>,
  ) {}

  async findAll(): Promise<Flights[]> {
    return this.FlightsRepository.find();
  }

  async findOne(id: any): Promise<Flights> {
    return this.FlightsRepository.findOne(id);
  }
}
