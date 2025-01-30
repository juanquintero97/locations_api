import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { CitiesService } from './cities.service';

@Controller('cities')
export class CitiesController {
    constructor(private citiesService: CitiesService) {}
    
    @Get()
    getAllCities(@Res() response) {
        this.citiesService.findAll().then((cities) => {
            response.status(HttpStatus.OK).json(cities);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving cities'
            });
        })
    }

    @Get(':stateId')
    getCitiesByStateId(@Param('stateId') stateId: number,@Res() response) {
        this.citiesService.findByStateId(stateId).then((cities) => {
            response.status(HttpStatus.OK).json(cities);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving cities'
            });
        })
    }

    @Get('from/:stateName')
    getCitiesByStateName(@Param('stateName') stateName: string,@Res() response) {
        this.citiesService.findByStateName(stateName).then((cities) => {
            response.status(HttpStatus.OK).json(cities);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving cities'
            });
        })
    }
}
