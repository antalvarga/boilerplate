import {Router, Request, Response } from 'express';
import {Controllers} from '../../controllers';

const AlgorithmRoutes = Router();

AlgorithmRoutes.get ( '/algorithm/:id', Controllers.Algorithm );

export default AlgorithmRoutes;
