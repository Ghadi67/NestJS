/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Req, Request } from '@nestjs/common';
import { Flights } from './flights.entity';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
    constructor(private readonly FlightsService : FlightsService){}
  @Get()
  findAll(): Promise<Flights[]> {
    return this.FlightsService.findAll();
  }

  @Get("/id")
  findOne(@Param() param) : Promise<Flights>{
    return this.FlightsService.findOne(param.id)
  } 
}
