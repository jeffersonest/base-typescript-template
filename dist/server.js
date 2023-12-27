"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("./config/dependency-injection.config");
const tsyringe_1 = require("tsyringe");
const server = tsyringe_1.container.resolve('Main');
server.start();
