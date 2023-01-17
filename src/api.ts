import { Router, Request, Response } from 'express';

import { orders } from './airtable/base';
import { query, validationResult } from 'express-validator';

type SelectParams = Parameters<typeof orders.select>[0];

type QueryParams = {
  q?: string;
  limit?: string;
};

const router = Router();

router.use((_req, _res, next) => {
  // TODO backend authentication
  next();
});

// get the date range of the table
router.get('/range', async (_req, res) => {
  const params: SelectParams = { fields: ['order_placed'], maxRecords: 1,  };
  const [firstRow, lastRow] = await Promise.all([
    orders.select({...params, sort: [{field: 'order_placed', direction: 'asc'}] }).firstPage(),
    orders.select({...params, sort: [{field: 'order_placed', direction: 'desc'}] }).firstPage(),
  ]);
  const startDate = firstRow[0].get('order_placed')?.toString();
  const endDate = lastRow[0].get('order_placed')?.toString();

  res.send({ data: { startDate, endDate }});
});

const queryValidators = [
  query('q').isString().notEmpty().optional(),
  query('limit').isNumeric().optional(),
];

// query the orders
router.get('/orders',
  [
    ...queryValidators,
    async (req: Request, res: Response) => {

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const params: QueryParams = req.query;

      console.log(params);
      try {
        const filters: SelectParams = {
          fields: ['order_placed', 'product_name', 'price', 'order_status'],
          sort: [{ field: 'order_placed', direction: 'desc' }],
          ...(params.q ? { filterByFormula: params.q } : {}),
          ...(params.limit ? { maxRecords: Number.parseInt(params.limit) } : {}),
        };
        console.log(filters)
        const rows = await orders.select(filters).all();
        res.send({ data: rows });

      } catch (e) {
        console.log('error: ', e);
        res.send({ errors: [(e as Error).toString()] });
      }
    }]);

export {
  router as api,
};
