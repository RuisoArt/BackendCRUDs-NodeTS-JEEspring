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
const SemeControllerTodo_1 = __importDefault(require("../controllers/semestres/SemeControllerTodo"));
const SemeControllerCrear_1 = __importDefault(require("../controllers/semestres/SemeControllerCrear"));
const SemeControllerBuscar_1 = __importDefault(require("../controllers/semestres/SemeControllerBuscar"));
const SemeControllerBorrar_1 = __importDefault(require("../controllers/semestres/SemeControllerBorrar"));
const SemeControllerActualizar_1 = __importDefault(require("../controllers/semestres/SemeControllerActualizar"));
const MateControllerTodo_1 = __importDefault(require("../controllers/materias/MateControllerTodo"));
const MateControllerCrear_1 = __importDefault(require("../controllers/materias/MateControllerCrear"));
const MateControllerBuscar_1 = __importDefault(require("../controllers/materias/MateControllerBuscar"));
const MateControllerBorrar_1 = __importDefault(require("../controllers/materias/MateControllerBorrar"));
const MateControllerActualizar_1 = __importDefault(require("../controllers/materias/MateControllerActualizar"));
const PenControllerActualizar_1 = __importDefault(require("../controllers/pensums/PenControllerActualizar"));
const PenControllerBorrar_1 = __importDefault(require("../controllers/pensums/PenControllerBorrar"));
const PenControllerBuscar_1 = __importDefault(require("../controllers/pensums/PenControllerBuscar"));
const PenControllerCrear_1 = __importDefault(require("../controllers/pensums/PenControllerCrear"));
const PenControllerTodo_1 = __importDefault(require("../controllers/pensums/PenControllerTodo"));
const AcessControllerTodo_1 = __importDefault(require("../controllers/accesos/AcessControllerTodo"));
const AcessControllerValidar_1 = __importDefault(require("../controllers/accesos/AcessControllerValidar"));
class Rutas {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasProgramas();
        this.rutasSemestres();
        this.rutasMateriaPensum();
        this.rutasMaterias();
        this.rutasPensums();
        this.rutasAccesos();
    }
    rutasProgramas() {
        this.rutaAPI.get('/programa', ProControllerTodo_1.default.dameProgramas);
        this.rutaAPI.post('/programa/crear', ProControllerCrear_1.default.grabarProgramas);
        this.rutaAPI.get('/programa/:codigoPrograma', ProControllerBuscar_1.default.buscarPrograma);
        this.rutaAPI.delete('/programa/:codigoPrograma', ProControllerBorrar_1.default.eliminarPrograma);
        this.rutaAPI.put('/programa/actualizar', ProControllerActualizar_1.default.actualizarProgramas);
    }
    rutasSemestres() {
        this.rutaAPI.get('/semestre', SemeControllerTodo_1.default.dameSemestres);
        this.rutaAPI.post('/semestre/crear', SemeControllerCrear_1.default.grabarSemestres);
        this.rutaAPI.get('/semestre/:codigoSemestre', SemeControllerBuscar_1.default.buscarSemestre);
        this.rutaAPI.delete('/semestre/:codigoSemestre', SemeControllerBorrar_1.default.eliminarSemestre);
        this.rutaAPI.put('/semestre/actualizar', SemeControllerActualizar_1.default.actualizarSemestre);
    }
    rutasMaterias() {
        this.rutaAPI.get('/materia', MateControllerTodo_1.default.dameMaterias);
        this.rutaAPI.post('/materia/crear', MateControllerCrear_1.default.grabarMateria);
        this.rutaAPI.get('/materia/:codigoMateria', MateControllerBuscar_1.default.buscarMateria);
        this.rutaAPI.delete('/materia/:codigoMateria', MateControllerBorrar_1.default.eliminarMateria);
        this.rutaAPI.put('/materia/actualizar', MateControllerActualizar_1.default.actualizarMaterias);
    }
    rutasPensums() {
        this.rutaAPI.get('/pensum', PenControllerTodo_1.default.damePensums);
        this.rutaAPI.post('/pensum/crear', PenControllerCrear_1.default.grabarPensum);
        this.rutaAPI.get('/pensum/:codigoPensum', PenControllerBuscar_1.default.buscarPensum);
        this.rutaAPI.delete('/pensum/:codigoPensum', PenControllerBorrar_1.default.eliminarPensum);
        this.rutaAPI.put('/pensum/actualizar', PenControllerActualizar_1.default.actualizarPensum);
    }
    rutasAccesos() {
        this.rutaAPI.get('/acceso', AcessControllerTodo_1.default.dameUsuarios);
        this.rutaAPI.post('/acceso/validar', AcessControllerValidar_1.default.encontrarUsuario);
    }
    rutasMateriaPensum() {
    }
}
const rutas = new Rutas();
exports.default = rutas.rutaAPI;
