"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProControllerTodo_1 = __importDefault(require("../controllers/programas/ProControllerTodo"));
const ProControllerCrear_1 = __importDefault(require("../controllers/programas/ProControllerCrear"));
const ProControllerBuscar_1 = __importDefault(require("../controllers/programas/ProControllerBuscar"));
const ProControllerBorrar_1 = __importDefault(require("../controllers/programas/ProControllerBorrar"));
const ProControllerActualizar_1 = __importDefault(require("../controllers/programas/ProControllerActualizar"));
class RutasProgramas {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasProgramas();
    }
    rutasProgramas() {
        this.rutaAPI.get('/programa', ProControllerTodo_1.default.dameProgramas);
        this.rutaAPI.post('/programa/crear', ProControllerCrear_1.default.grabarProgramas);
        this.rutaAPI.get('/programa/:codigoPrograma', ProControllerBuscar_1.default.buscarPrograma);
        this.rutaAPI.delete('/programa/:codigoPrograma', ProControllerBorrar_1.default.eliminarPrograma);
        this.rutaAPI.put('/programa/actualizar', ProControllerActualizar_1.default.actualizarProgramas);
    }
}
const rutasProgramas = new RutasProgramas();
exports.default = rutasProgramas.rutaAPI;
