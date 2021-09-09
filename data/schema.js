import { makeExecutableSchema } from 'graphql-tools';
import { resolvers } from './resolvers';

const typeDefs = `
    type Student {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: String
        age: Int
        score: Float
        subjects: [Subject] 
    }

    type Subject {
        name: String
    }

    enum Gender {
        MALE
        FEMALE
        OTHER
    }

    type Query {
        getOneStudent(id: ID): Student
    }

    input StudentInput {
        id: ID
        firstName: String
        lastName: String
        gender: Gender
        email: String
        age: Int
        score: Float
        subjects: [SubjectInput]
    }

    input SubjectInput {
        name: String
    }

    type Mutation {
        createStudent(input: StudentInput): Student
        updateStudent(input: StudentInput): Student
        deleteStudent(id: ID!): String
    }
`;


const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema }; 