import { Router, Request, Response } from 'express';

const router = Router();

const HealthCheckRoutes = () => {
    /**
     * @swagger
     * /api/health:
     *   get:
     *     summary: Health check endpoint
     *     responses:
     *       200:
     *         description: Server is healthy
     */
    router.get('/', (req: Request, res: Response) => {
        res.status(200).json({ status: 'OK', timestamp: new Date() });
    });

    return router;
};

export default HealthCheckRoutes;
