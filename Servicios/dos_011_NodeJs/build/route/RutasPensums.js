"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PenControllerActualizar_1 = __importDefault(require("../controllers/pensums/PenControllerActualizar"));
const PenControllerBorrar_1 = __importDefault(require("../controllers/pensums/PenControllerBorrar"));
const PenControllerBuscar_1 = __importDefault(require("../controllers/pensums/PenControllerBuscar"));
const PenControllerCrear_1 = __importDefault(require("../controllers/pensums/PenControllerCrear"));
const PenControllerTodo_1 = __importDefault(require("../controllers/pensums/PenControllerTodo"));
class RutasPensums {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasPensums();
    }
    rutasPensums() {
        this.rutaAPI.get('/pensum', PenControllerTodo_1.default.damePensums);
        this.rutaAPI.post('/pensum/crear', PenControllerCrear_1.default.grabarPensum);
        this.rutaAPI.get('/pensum/:codigoPensum', PenControllerBuscar_1.default.buscarPensum);
        this.rutaAPI.delete('/pensum/:codigoPensum', PenControllerBorrar_1.default.eliminarPensum);
        this.rutaAPI.put('/pensum/actualizar', PenControllerActualizar_1.default.actualizarPensum);
    }
}
const rutasPensums = new RutasPensums();
exports.default = rutasPensums.rutaAPI;
