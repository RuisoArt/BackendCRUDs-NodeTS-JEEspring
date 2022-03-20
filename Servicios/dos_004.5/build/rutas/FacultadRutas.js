"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FacultadControlador_1 = __importDefault(require("../controladores/FacultadControlador"));
class FacultadesRutas {
    constructor() {
        this.rutaFacuApi = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutaFacuApi.get('/las_facultades', FacultadControlador_1.default.dameFacultades);
        this.rutaFacuApi.get('/los_docentes', FacultadControlador_1.default.dameDocentes);
    }
}
const facultadesRutas = new FacultadesRutas();
exports.default = facultadesRutas.rutaFacuApi;
