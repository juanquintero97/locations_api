import { States } from 'src/states/entities/states.entity/states.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cities {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => States, (state) => state.id)
    state: States;

    @Column()
    name: string;
}
