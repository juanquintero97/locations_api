import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { StatesService } from './states.service';

@Controller('states')
export class StatesController {
    constructor(private statesService: StatesService) {}
    
    @Get()
    getAllStates(@Res() response) {
        this.statesService.findAll().then((states) => {
            response.status(HttpStatus.OK).json(states);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving states'
            });
        });
    }
    
    @Get(':countryId')
    getStatesByCountryId(@Param('countryId') countryId: number,@Res() response) {
        this.statesService.findByCountryId(countryId).then((states) => {
            response.status(HttpStatus.OK).json(states);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving states'
            });
        });
    }

    @Get('from/:countryName')
    getStatesByCountryName(@Param('countryName') countryName: string,@Res() response) {
        this.statesService.findByCountryName(countryName).then((states) => {
            response.status(HttpStatus.OK).json(states);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving states'
            });
        });
    }
}
