import { Router } from 'express';
import { PageController } from '../controllers/PageController';

const router = Router();

const PageRoutes = (pageController: PageController) => {
    /**
     * @swagger
     * /api/pages/{slug}:
     *   get:
     *     summary: Get page by slug
     *     parameters:
     *       - in: path
     *         name: slug
     *         required: true
     *         schema:
     *           type: string
     *         description: Page slug
     *     responses:
     *       200:
     *         description: Page data
     *       404:
     *         description: Page not found
     */
    router.get('/:slug', (req, res) => pageController.getPage(req, res));

    // Implement other routes (POST, PUT, DELETE) similarly

    return router;
};

export default PageRoutes;
