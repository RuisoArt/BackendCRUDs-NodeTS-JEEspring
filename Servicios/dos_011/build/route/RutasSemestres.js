"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SemeControllerTodo_1 = __importDefault(require("../controllers/semestres/SemeControllerTodo"));
const SemeControllerCrear_1 = __importDefault(require("../controllers/semestres/SemeControllerCrear"));
const SemeControllerBuscar_1 = __importDefault(require("../controllers/semestres/SemeControllerBuscar"));
const SemeControllerBorrar_1 = __importDefault(require("../controllers/semestres/SemeControllerBorrar"));
const SemeControllerActualizar_1 = __importDefault(require("../controllers/semestres/SemeControllerActualizar"));
class RutasSemestres {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasSemestres();
    }
    rutasSemestres() {
        this.rutaAPI.get('/semestre', SemeControllerTodo_1.default.dameSemestres);
        this.rutaAPI.post('/semestre/crear', SemeControllerCrear_1.default.grabarSemestres);
        this.rutaAPI.get('/semestre/:codigoSemestre', SemeControllerBuscar_1.default.buscarSemestre);
        this.rutaAPI.delete('/semestre/:codigoSemestre', SemeControllerBorrar_1.default.eliminarSemestre);
        this.rutaAPI.put('/semestre/actualizar', SemeControllerActualizar_1.default.actualizarSemestre);
    }
}
const rutasSemestres = new RutasSemestres();
exports.default = rutasSemestres.rutaAPI;
