import { container } from 'tsyringe';
import Routes from '../infrastructure/interface/routes';
import Main from '../main';
import MainController from '../infrastructure/interface/controllers/main.controller';
import MainService from '../core/use-cases/main.service';
import MainRoutes from '../infrastructure/interface/routes/main.routes';
import MainAdapter from '../infrastructure/adapters/main.adapter';

container.registerSingleton<Routes>('Routes', Routes);
container.registerSingleton<Main>('Main', Main);
container.registerSingleton<MainController>('MainController', MainController);
container.registerSingleton<MainRoutes>('MainRoutes', MainRoutes);
container.registerSingleton<MainService>('MainService', MainService);
container.registerSingleton<MainAdapter>('MainAdapter', MainAdapter);

export {};
