import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Countries } from './entities/countries.entity/countries.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
    constructor(
        @InjectRepository(Countries)
        private readonly countriesRepository: Repository<Countries>,
    ) {}
    async findAll(){
        return await this.countriesRepository.find();
    }

    async findById(id: number){
        return await this.countriesRepository.findOneBy({id});
    }

    async findByName(name: string){
        return await this.countriesRepository.findOneBy({name});
    }
}
