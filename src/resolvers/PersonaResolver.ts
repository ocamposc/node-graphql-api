import { Query, Resolver, Mutation, Arg, Field, InputType, Int } from 'type-graphql'

import { Personas } from '../entity/Persona'


@InputType()
class PersonaInput {
    @Field()
    name!: string;

    @Field()
    lastName!: string;

    @Field()
    age!: number;

    @Field()
    email!: string;
}
@InputType()
class PersonaUpdateInput {
    @Field(() => String, {nullable: true})
    name?: string;

    @Field(() => String, {nullable: true})
    lastName?: string;

    @Field(() => Int, {nullable: true})
    age?: number;

    @Field(() => String, {nullable: true})
    email?: string;
}


@Resolver()
export class PersonaResolver {

    @Mutation(() => Personas)
    async createPersona(
        @Arg('data', () => PersonaInput) data: PersonaInput
    ) {
    const newPersona = Personas.create(data);
    return await newPersona.save();
    }

    @Mutation(() => Boolean)
    deletePersona(@Arg('id', () => Int) id: number) {
        Personas.delete(id);
        return true;
    }

    @Mutation(() => Boolean)
    async updatePersona(
        @Arg('id', () => Int) id: number,
        @Arg('data', () => PersonaUpdateInput) data: PersonaUpdateInput
    ){
        await Personas.update({id}, data);
        return true;
    }

    @Query(() => [Personas])
    personas() {
        return Personas.find();
    }
}