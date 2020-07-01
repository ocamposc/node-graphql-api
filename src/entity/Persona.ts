import {Entity, Column, PrimaryGeneratedColumn, BaseEntity} from 'typeorm'
import {Field, ObjectType, Int} from 'type-graphql'

@ObjectType()
@Entity()
export class Personas extends BaseEntity{
    @Field(() => Int)
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column()
    name!: string;

    @Field()
    @Column()
    lastName!: string;

    @Field(() => Int)
    @Column()
    age!: number;

    @Field()
    @Column()
    email!: string;
}