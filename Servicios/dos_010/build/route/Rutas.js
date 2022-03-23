"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuControllerActualizar_1 = __importDefault(require("../controllers/usuarios/UsuControllerActualizar"));
const UsuControllerBorrar_1 = __importDefault(require("../controllers/usuarios/UsuControllerBorrar"));
const UsuControllerBuscar_1 = __importDefault(require("../controllers/usuarios/UsuControllerBuscar"));
const UsuControllerCrear_1 = __importDefault(require("../controllers/usuarios/UsuControllerCrear"));
const UsuControllerTodo_1 = __importDefault(require("../controllers/usuarios/UsuControllerTodo"));
const AccessControllerTodo_1 = __importDefault(require("../controllers/accesos/AccessControllerTodo"));
const AccessControllerValidar_1 = __importDefault(require("../controllers/accesos/AccessControllerValidar"));
const AccessControllerContar_1 = __importDefault(require("../controllers/accesos/AccessControllerContar"));
class Rutas {
    constructor() {
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        this.rutasUsuarios();
        this.rutasAcceso();
    }
    rutasUsuarios() {
        this.rutaAPI.get('/usuario', UsuControllerTodo_1.default.dameUsuarios);
        this.rutaAPI.post('/usuario/crear', UsuControllerCrear_1.default.grabarUsuario);
        this.rutaAPI.get('/usuario/:codUsuario', UsuControllerBuscar_1.default.buscarUsuario);
        this.rutaAPI.delete('/usuario/:codUsuario', UsuControllerBorrar_1.default.eliminarUsuario);
        this.rutaAPI.put('/usuario/actualizar', UsuControllerActualizar_1.default.refrescarUsuario);
    }
    rutasAcceso() {
        this.rutaAPI.get('/acceso', AccessControllerTodo_1.default.dameUsuarios);
        this.rutaAPI.post('/acceso/validar', AccessControllerValidar_1.default.encontrarUsuario);
        this.rutaAPI.get('/acceso/contar', AccessControllerContar_1.default.conteoIngresos);
    }
}
const rutas = new Rutas();
exports.default = rutas.rutaAPI;
