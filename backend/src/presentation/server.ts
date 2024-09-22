// src/presentation/server.ts

import express from 'express';
import mongoose from 'mongoose';
import PageRoutes from '../infrastructure/routes/PageRoutes';
import HealthCheckRoutes from '../infrastructure/routes/HealthCheckRoutes';
import { errorHandler } from '../infrastructure/middleware/errorHandler';
import dotenv from 'dotenv';
import { container } from '../infrastructure/container';
import { PageController } from '../infrastructure/controllers/PageController';
import { TYPES } from '../application/interfaces/types';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import path from 'path';
import helmet from 'helmet';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI =
    process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database_name';

// Middleware
app.use(express.json());
app.use(errorHandler);
app.use(helmet);

// Swagger Setup
const swaggerOptions = {
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Everylane API',
            version: '1.0.0',
            description: 'API documentation for Everylane backend',
        },
    },
    apis: [path.resolve(__dirname, '../infrastructure/routes/*.ts')], // Adjusted path
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Resolve controllers from the container
const pageController = container.get<PageController>(TYPES.PageController);

// Routes
app.use('/api/pages', PageRoutes(pageController));
app.use('/api/health', HealthCheckRoutes());

// Custom Error Handler
app.use(errorHandler);

// Connect to MongoDB and Start Server
const startServer = async () => {
    try {
        await mongoose.connect(MONGODB_URI);
        console.log('Connected to MongoDB');

        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });

        // Handle graceful shutdown
        const gracefulShutdown = async () => {
            console.log('Shutting down gracefully...');
            server.close(async () => {
                console.log('Closed out remaining connections');
                try {
                    await mongoose.connection.close();
                    console.log('MongoDB connection closed');
                    process.exit(0);
                } catch (error) {
                    console.error('Error closing MongoDB connection:', error);
                    process.exit(1);
                }
            });
        };

        process.on('SIGTERM', gracefulShutdown);
        process.on('SIGINT', gracefulShutdown);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

startServer();
