import { Router } from 'express';
import { IngestDocument, GetIngestionStatus } from '../controllers/ingestionController';

const router = Router();

/**
 * @swagger
 * /api/ingestion:
 *   post:
 *     summary: Ingest a new document into the system
 *     tags: [Ingestion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               document:
 *                 type: string
 *                 description: The document content to ingest
 *     responses:
 *       200:
 *         description: Document successfully ingested
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 documentId:
 *                   type: string
 */
router.post('/', IngestDocument);

/**
 * @swagger
 * /api/ingestion/status/{id}:
 *   get:
 *     summary: Get the status of a document ingestion
 *     tags: [Ingestion]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The document ID
 *     responses:
 *       200:
 *         description: Ingestion status retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 progress:
 *                   type: number
 */
router.get('/status/:id', GetIngestionStatus);

export default router;