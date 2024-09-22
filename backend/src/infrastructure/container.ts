import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from '../application/interfaces/types';
import { IPageRepository } from '../application/interfaces/IPageRepository';
import { PageRepository } from './repositories/PageRepository';
import { GetPageUseCase } from '../application/useCases/GetPageUseCase';

const container = new Container();

container.bind<IPageRepository>(TYPES.IPageRepository).to(PageRepository);
container.bind<GetPageUseCase>(TYPES.GetPageUseCase).to(GetPageUseCase);

export { container };
