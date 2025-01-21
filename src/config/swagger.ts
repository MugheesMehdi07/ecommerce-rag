import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'E-commerce RAG API',
            version: '1.0.0',
            description: 'Implementation for RAG (Retrieval-Augmented Generation) endpoints.',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server'
            }
        ],
    },
    apis: ['./src/routes/*.ts'], // Points to the route files where the documentation lives
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);