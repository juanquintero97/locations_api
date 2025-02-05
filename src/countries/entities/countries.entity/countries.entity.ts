import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
@Entity()
export class Countries {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}
