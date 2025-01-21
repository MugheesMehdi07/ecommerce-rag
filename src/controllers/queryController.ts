import { Request, Response } from 'express';

export const QueryDocument = (req: Request, res: Response) => {
    const { query } = req.body;
    // In a real implementation, this would search through ingested documents
    res.json({
        results: [
            {
                documentId: 'doc123',
                relevanceScore: 0.95,
                snippet: 'Relevant text from the document...'
            }
        ],
        query
    });
};

export const GetQueryHistory = (req: Request, res: Response) => {
    // In a real implementation, this would fetch from a database
    res.json([
        {
            queryId: 'q123',
            timestamp: new Date().toISOString(),
            query: 'Sample query'
        }
    ]);
};