import express from 'express';
// import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './config/swagger';
import ingestionRoutes from './routes/ingestionRoutes';
import queryRoutes from './routes/queryRoutes';

const app = express();

// Middleware
app.use(express.json());
// app.use(cors());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use('/api/ingestion', ingestionRoutes);
app.use('/api/query', queryRoutes);

export default app;