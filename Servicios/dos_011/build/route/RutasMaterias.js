"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MateControllerTodo_1 = __importDefault(require("../controllers/materias/MateControllerTodo"));
const MateControllerCrear_1 = __importDefault(require("../controllers/materias/MateControllerCrear"));
const MateControllerBuscar_1 = __importDefault(require("../controllers/materias/MateControllerBuscar"));
const MateControllerBorrar_1 = __importDefault(require("../controllers/materias/MateControllerBorrar"));
const MateControllerActualizar_1 = __importDefault(require("../controllers/materias/MateControllerActualizar"));
class RutasMaterias {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasMaterias();
    }
    rutasMaterias() {
        this.rutaAPI.get('/materia', MateControllerTodo_1.default.dameMaterias);
        this.rutaAPI.post('/materia/crear', MateControllerCrear_1.default.grabarMateria);
        this.rutaAPI.get('/materia/:codigoMateria', MateControllerBuscar_1.default.buscarMateria);
        this.rutaAPI.delete('/materia/:codigoMateria', MateControllerBorrar_1.default.eliminarMateria);
        this.rutaAPI.put('/materia/actualizar', MateControllerActualizar_1.default.actualizarMaterias);
    }
}
const rutasMaterias = new RutasMaterias();
exports.default = rutasMaterias.rutaAPI;
