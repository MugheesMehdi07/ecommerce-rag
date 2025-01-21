export const QueryDocument = (req : any, res : any) => {
    res.json({ message: 'Query endpoint hit!', data: { query: req.body.query } });
  };