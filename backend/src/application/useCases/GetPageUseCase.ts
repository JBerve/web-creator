import { IPageRepository } from '../interfaces/IPageRepository';
import { Page } from '../../domain/entities/Page';
import { injectable } from 'inversify';

@injectable()
export class GetPageUseCase {
    constructor(private pageRepository: IPageRepository) {}

    async execute(slug: string): Promise<Page | null> {
        return await this.pageRepository.getPageBySlug(slug);
    }
}
