// src/infrastructure/repositories/PageRepository.ts

import { injectable } from 'inversify';
import { IPageRepository } from '../../application/interfaces/IPageRepository';
import { Page } from '../../domain/entities/Page';
import mongoose, { Document, Schema } from 'mongoose';

interface PageDocument extends Document, Page {}

const PageSchema = new Schema<PageDocument>({
    slug: { type: String, required: true, unique: true },
    header: {
        title: { type: String, required: true },
        subtitle: { type: String, required: true },
        backgroundImage: { type: String, required: true },
    },
    content: {
        sections: {
            type: [
                {
                    title: { type: String, required: true },
                    text: { type: String, required: true },
                },
            ],
            required: true,
        },
    },
});

const PageModel = mongoose.model<PageDocument>('Page', PageSchema);

@injectable()
export class PageRepository implements IPageRepository {
    async getPageBySlug(slug: string): Promise<Page | null> {
        const pageDoc = await PageModel.findOne({ slug }).exec();
        return pageDoc ? pageDoc.toObject() : null;
    }

    async getAllPages(): Promise<Page[]> {
        const pages = await PageModel.find().exec();
        return pages.map((pageDoc) => pageDoc.toObject());
    }

    async createPage(page: Page): Promise<void> {
        const pageModel = new PageModel(page);
        await pageModel.save();
    }

    async updatePage(slug: string, updatedPage: Partial<Page>): Promise<void> {
        await PageModel.findOneAndUpdate({ slug }, updatedPage, { new: true }).exec();
    }

    async deletePage(slug: string): Promise<void> {
        await PageModel.findOneAndDelete({ slug }).exec();
    }
}
