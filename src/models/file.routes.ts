import { Router } from 'express';

import { authCheck } from '../middleware/middleware';
import { getAll, upload } from './file.controller';

export const router = Router();

router.post('/:userId', authCheck, upload)
      .get('/:name', getAll);
