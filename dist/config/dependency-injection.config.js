"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const routes_1 = __importDefault(require("../infrastructure/interface/routes"));
const main_1 = __importDefault(require("../main"));
const main_controller_1 = __importDefault(require("../infrastructure/interface/controllers/main.controller"));
const main_service_1 = __importDefault(require("../core/use-cases/main.service"));
const main_routes_1 = __importDefault(require("../infrastructure/interface/routes/main.routes"));
const main_adapter_1 = __importDefault(require("../infrastructure/adapters/main.adapter"));
tsyringe_1.container.registerSingleton('Routes', routes_1.default);
tsyringe_1.container.registerSingleton('Main', main_1.default);
tsyringe_1.container.registerSingleton('MainController', main_controller_1.default);
tsyringe_1.container.registerSingleton('MainRoutes', main_routes_1.default);
tsyringe_1.container.registerSingleton('MainService', main_service_1.default);
tsyringe_1.container.registerSingleton('MainAdapter', main_adapter_1.default);
