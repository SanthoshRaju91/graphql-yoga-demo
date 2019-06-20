const { GraphQLServer } = require('graphql-yoga');
const Query = require("./resolvers/Query")

const server = new GraphQLServer({
    typeDefs: `./schema.graphql`,
    resolvers: {
      Query
    },
    context: req => ({ ...req })
  });
  
  server.express.enable("trust proxy");

  server.express.get("/users", (req, res) => {
      res.json([
          {
              name: "John Doe",
              place: "America",
              age: 24
          }, {
              name: "Jane Doe",
              place: "Austrailia",
              age: 22
          }
      ])
  })
  
  server.start(5000, ({ port }) => {
    console.log(`Server is now running on port ${port}`);
  });
  
