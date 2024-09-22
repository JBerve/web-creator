import { Page } from '../../domain/entities/Page';

export interface IPageRepository {
    getPageBySlug(slug: string): Promise<Page | null>;
    getAllPages(): Promise<Page[]>;
    createPage(page: Page): Promise<Page>;
    updatePage(slug: string, page: Partial<Page>): Promise<Page | null>;
    deletePage(slug: string): Promise<boolean>;
}
