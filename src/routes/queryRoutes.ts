import { Router } from 'express';
import { QueryDocument, GetQueryHistory } from '../controllers/queryController';

const router = Router();

/**
 * @swagger
 * /api/query:
 *   post:
 *     summary: Execute a query against ingested documents
 *     tags: [Query]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 description: The query string to execute
 *     responses:
 *       200:
 *         description: Query executed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     type: object
 */
router.post('/', QueryDocument);

/**
 * @swagger
 * /api/query/history:
 *   get:
 *     summary: Get query execution history
 *     tags: [Query]
 *     responses:
 *       200:
 *         description: Query history retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   queryId:
 *                     type: string
 *                   timestamp:
 *                     type: string
 *                   query:
 *                     type: string
 */
router.get('/history', GetQueryHistory);

export default router;
