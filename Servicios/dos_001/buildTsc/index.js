"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ServidorPrueba_1 = __importDefault(require("./configuration/ServidorPrueba"));
const servidor = new ServidorPrueba_1.default();
servidor.iniciarServidor();
//npm run build --> arranca primero el build del package json en 1 terminal
//npm run dev --> arranca el dev del package json en otra terminal
