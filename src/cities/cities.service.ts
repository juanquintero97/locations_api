import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cities } from './entities/cities.entity/cities.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CitiesService {
    constructor(
        @InjectRepository(Cities)
        private readonly citiesRepository: Repository<Cities>,
    ) {}

    async findAll(){
        return await this.citiesRepository.find();
    }

    async findByStateId(stateId: number){
        return await this.citiesRepository.find({where: {state: {id: stateId}}});
    }

    async findByStateName(stateName: string){
        return await this.citiesRepository.find({where: {state: {name: stateName}}});
    }
}
