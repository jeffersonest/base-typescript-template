import "reflect-metadata";
import './config/dependency-injection.config';
import { container } from 'tsyringe';
import Main from './main';

const server = container.resolve<Main>('Main');
server.start();
