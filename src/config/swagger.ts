import swaggerJsDoc from 'swagger-jsdoc';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce RAG API',
      version: '1.0.0',
      description: 'Mock implementation for RAG endpoints.',
    },
    servers: [{ url: 'http://localhost:3000' }],
  },
  apis: ['./src/routes/*.ts'],
};

export const swaggerDocs = swaggerJsDoc(swaggerOptions);

// src/controllers/ingestionController.ts
export const mockIngestDocument = (req : any , res : any) => {
  res.json({ message: 'Mock: Document ingestion endpoint hit!' });
};

// src/controllers/queryController.ts
export const mockQueryDocument = (req : any , res : any) => {
  res.json({ message: 'Mock: Query endpoint hit!', data: { query: req.body.query } });
};
