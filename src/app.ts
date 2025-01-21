import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './config/swagger';
import { QueryDocument } from './controllers/queryController';
import { IngestDocument } from './controllers/ingestionController';


const app = express();
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/api/ingestion', IngestDocument);
app.get('/api/query', QueryDocument);


export default app;

//cors
//middlewares