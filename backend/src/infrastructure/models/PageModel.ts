import { Schema, model, Document } from 'mongoose';
import { Page } from '../../domain/entities/Page';

export interface PageDocument extends Page, Document {}

const HeaderConfigSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    backgroundImage: { type: String, required: true },
});

const SectionSchema = new Schema({
    type: { type: String, required: true },
    heading: { type: String },
    content: { type: String },
    servicesList: [
        {
            title: String,
            description: String,
        },
    ],
    clients: [
        {
            name: String,
            business: String,
            quote: String,
        },
    ],
    faqs: [
        {
            question: String,
            answer: String,
        },
    ],
});

const PageSchema = new Schema({
    slug: { type: String, required: true, unique: true },
    navTitle: { type: String },
    header: { type: HeaderConfigSchema, required: true },
    content: {
        sections: [SectionSchema],
    },
});

export const PageModel = model<PageDocument>('Page', PageSchema);
