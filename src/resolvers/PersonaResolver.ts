import { Query, Resolver, Mutation, Arg, Field, InputType } from 'type-graphql'

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


@Resolver()
export class PersonaResolver {

    @Mutation(() => Personas)
    async createPersona(
        @Arg('data', () => PersonaInput) data: PersonaInput
    ) {
    const newPersona = Personas.create(data);
    return await newPersona.save();
    }

    @Query(() => [Personas])
    personas() {
        return Personas.find()
    }
}