"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AcessControllerTodo_1 = __importDefault(require("../controllers/accesos/AcessControllerTodo"));
const AcessControllerValidar_1 = __importDefault(require("../controllers/accesos/AcessControllerValidar"));
class RutasAccesos {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasAccesos();
    }
    rutasAccesos() {
        this.rutaAPI.get('/acceso', AcessControllerTodo_1.default.dameUsuarios);
        this.rutaAPI.post('/acceso/validar', AcessControllerValidar_1.default.encontrarUsuario);
    }
}
const rutasAccesos = new RutasAccesos();
exports.default = rutasAccesos.rutaAPI;
