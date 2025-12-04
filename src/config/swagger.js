import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
definition: {
    openapi: "3.0.0",
    info: {
    title: "API Backend3",
    version: "1.0.0"
    },
},
apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);

export const swaggerDocs = (app) => {
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
console.log("Swagger Docs disponibles en /api-docs");
};
