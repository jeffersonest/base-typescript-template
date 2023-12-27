import * as dotenv from 'dotenv';
import "reflect-metadata";
import './config/dependency-injection.config';
import { container } from 'tsyringe';
import Main from './main';

dotenv.config();
const server = container.resolve<Main>('Main');
server.start();
