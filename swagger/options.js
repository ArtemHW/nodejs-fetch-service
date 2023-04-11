const swaggerOptions = {
  definition: {
    openapi: "3.1.0",
    swagger: "2.0",
    info: {
      title: "NodeJS Fetch Service API",
      version: "0.1.0",
      description: "A web service that is used to fetching data and provide api for my applications. Made with NodeJS, Express and Swagger.",
    },
    // host: "localhost:3000", // the host or url of the app
    // basePath: "/api", // the base path of your endpoint
  },
  apis: ["./routes/*.js"]
};

module.exports = swaggerOptions