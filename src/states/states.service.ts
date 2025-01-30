import { Injectable } from '@nestjs/common';
import { States } from './entities/states.entity/states.entity';
import { Countries } from '../countries/entities/countries.entity/countries.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatesService {
    constructor(
        @InjectRepository(States)
        private readonly statesRepository: Repository<States>,
    ) {}

    async findAll(){
        return await this.statesRepository.find();
    }

    async findByCountryId(countryId: number){
        return await this.statesRepository.find({ where: { country: { id: countryId } } });
    }

    async findByCountryName(countryName: string){
        return await this.statesRepository.find({ where: { country: { name: countryName } } }); 
    }
}
