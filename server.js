import express from "express";
import { ApolloServer, gql } from "apollo-server-express";
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "./models";

const server = new ApolloServer({
  typeDefs: gql(typeDefs),
  resolvers,
  context: { db }
});

const app = express();
server.applyMiddleware({ app });

db.sequelize.sync().then(() => {
    var sysPort = 4124;
    app.listen({ port: sysPort }, () =>
    console.log(`Server ready at http://localhost:${sysPort}${server.graphqlPath}`)
  );
});
