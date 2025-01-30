import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
    constructor(private countriesService: CountriesService) {} 

    @Get()
    getAllCountries(@Res() response) {
        this.countriesService.findAll().then((countries) => {
            response.status(HttpStatus.OK).json(countries);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving countries'
            });
        })
    }

    @Get(':countryId')
    getCountryById(@Param('countryId') countryId: number,@Res() response) {
        this.countriesService.findById(countryId).then((country) => {
            response.status(HttpStatus.OK).json(country);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving country'
            });
        });
    }

    @Get('name/:countryName')
    getCountryByName(@Param('countryName') countryName: string,@Res() response) {
        this.countriesService.findByName(countryName).then((country) => {
            response.status(HttpStatus.OK).json(country);
        }).catch(() => {
            response.status(HttpStatus.FORBIDDEN).json({
                message: 'Error retrieving country'
            });
        });
    }

}
