"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PartidoController_1 = __importDefault(require("../controladores/PartidoController"));
const CandidatoController_1 = __importDefault(require("../controladores/CandidatoController"));
class PartidoRutas {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaAPI.get('/candidatos', CandidatoController_1.default.dameCandidatos);
        this.rutaAPI.get('/partidos', PartidoController_1.default.damePartidos);
        this.rutaAPI.post('/partidos/crear', PartidoController_1.default.grabarPartido);
        this.rutaAPI.post('/candidatos/crear', CandidatoController_1.default.grabarCandidato);
    }
}
const partidoRutas = new PartidoRutas();
exports.default = partidoRutas.rutaAPI;
