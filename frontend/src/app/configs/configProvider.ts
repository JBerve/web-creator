import configData from './config.json';
import { Config, PageConfig } from './configTypes';

const config: Config = configData as Config;

export const getPageConfig = (pageKey: string): PageConfig => {
    const pageConfig = config.pages[pageKey];

    if (!pageConfig) {
        throw new Error(`Page config for "${pageKey}" not found.`);
    }

    return pageConfig;
};

export const getGlobalConfig = () => {
    return config;
};