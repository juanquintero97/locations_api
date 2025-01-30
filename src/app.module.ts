import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesController } from './countries/countries.controller';
import { StatesController } from './states/states.controller';
import { CitiesController } from './cities/cities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Countries } from './countries/entities/countries.entity/countries.entity';
import { States } from './states/entities/states.entity/states.entity';
import { Cities } from './cities/entities/cities.entity/cities.entity';
import { CountriesService } from './countries/countries.service';
import { StatesService } from './states/states.service';
import { CitiesService } from './cities/cities.service';
import { ConfigModule } from '@nestjs/config';
import { parseString } from 'fast-csv';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Countries, States, Cities],
      synchronize: true
    }),
    TypeOrmModule.forFeature([Countries, States, Cities])
  ],
  controllers: [AppController, CountriesController, StatesController, CitiesController],
  providers: [AppService, CountriesService, StatesService, CitiesService],
})
export class AppModule {}
