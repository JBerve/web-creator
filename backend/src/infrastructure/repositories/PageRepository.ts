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
        sections: { type: Array, required: true },
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
        return await PageModel.find().lean().exec();
    }

    async createPage(page: Page): Promise<Page> {
        const newPage = new PageModel(page);
        return await newPage.save();
    }

    async updatePage(slug: string, page: Partial<Page>): Promise<Page | null> {
        return await PageModel.findOneAndUpdate({ slug }, page, { new: true })
            .lean()
            .exec();
    }

    async deletePage(slug: string): Promise<boolean> {
        const result = await PageModel.deleteOne({ slug }).exec();
        return result.deletedCount === 1;
    }
}
