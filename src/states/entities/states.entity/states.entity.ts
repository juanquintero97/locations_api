import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Countries } from 'src/countries/entities/countries.entity/countries.entity';

@Entity()
export class States {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Countries, (country) => country.id)
    country: Countries;

    @Column()
    name: string;
}

