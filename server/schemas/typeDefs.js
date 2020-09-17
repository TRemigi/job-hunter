// import the gql tagged template function 
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    jobs: [Job]
}

type Job {
    _id: ID
    jobTitle: String
    createdAt: String
    username: String
    status: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
    users: [User]
    user(username: String!): User
    jobs(username: String): [Job]
    job(_id: ID!): Job
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addJob(jobTitle: String!, status: String!): Job
}
`;

//export the typeDefs
module.exports = typeDefs;