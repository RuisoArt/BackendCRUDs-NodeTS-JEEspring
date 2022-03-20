"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgramaController_1 = __importDefault(require("../controladores/ProgramaController"));
const SemestreController_1 = __importDefault(require("../controladores/SemestreController"));
const ProgramaController_Actualizar_1 = __importDefault(require("../controladores/programas/ProgramaController_Actualizar"));
class Rutas {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAPI.get('/programa', ProgramaController_1.default.dameProgramas);
        this.rutaAPI.post('/programa/crear', ProgramaController_1.default.grabarProgramas);
        this.rutaAPI.get('/programa/:codigoPrograma', ProgramaController_1.default.buscarPrograma);
        this.rutaAPI.delete('/programa/:codigoPrograma', ProgramaController_1.default.eliminarPrograma);
        this.rutaAPI.put('/programa/actualizar', ProgramaController_Actualizar_1.default.actualizarProgramas);
        this.rutaAPI.get('/semestre', SemestreController_1.default.dameSemestres);
        this.rutaAPI.post('/semestre/crear', SemestreController_1.default.grabarSemestres);
    }
}
const rutas = new Rutas();
exports.default = rutas.rutaAPI;
