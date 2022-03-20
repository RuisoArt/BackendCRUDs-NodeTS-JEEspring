"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const PruebaServer_1 = __importDefault(require("./configuracion/PruebaServer"));
const pruebaServer = new PruebaServer_1.default();
pruebaServer.iniciarServidor();
