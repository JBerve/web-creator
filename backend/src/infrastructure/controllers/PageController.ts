import { Request, Response } from 'express';
import { injectable, inject } from 'inversify';
import { GetPageUseCase } from '../../application/useCases/GetPageUseCase';
import { TYPES } from '../../application/interfaces/types';

@injectable()
export class PageController {
    private getPageUseCase: GetPageUseCase;

    constructor(@inject(TYPES.GetPageUseCase) getPageUseCase: GetPageUseCase) {
        this.getPageUseCase = getPageUseCase;
    }

    async getPage(req: Request, res: Response): Promise<Response> {
        const slug = req.params.slug;
        try {
            const page = await this.getPageUseCase.execute(slug);
            if (!page) {
                return res.status(404).json({ message: 'Page not found' });
            }
            return res.json(page);
        } catch (error) {
            return res
                .status(500)
                .json({ message: 'Internal server error', error });
        }
    }

    // Implement other controller methods (create, update, delete) similarly
}
