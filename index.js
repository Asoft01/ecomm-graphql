const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
    type Query {
        hello: [String]
    }
`


const resolvers = {
    Query: {
        hello: () => {
            return ["Hello", "my", "Friend"]
        }
    }
}

const server = new ApolloServer({
    typeDefs, 
    resolvers
}); 

server.listen().then(({ url }) => {
    console.log("Server is ready at " + url);
});
