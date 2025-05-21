import express from 'express';
const router = express.Router();
import userRoutes from './user-routes.js';

router.use('/users', userRoutes);

import typedefs from './user-routes.js';
import resolvers from './user-routes.js';

export { typedefs, resolvers };

export default router;
