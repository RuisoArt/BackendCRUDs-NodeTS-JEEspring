"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClientesControllerBuscar_1 = __importDefault(require("../controllers/clientes/ClientesControllerBuscar"));
const ClientesControllerTodo_1 = __importDefault(require("../controllers/clientes/ClientesControllerTodo"));
const ClientesControllerActualizar_1 = __importDefault(require("../controllers/clientes/ClientesControllerActualizar"));
const ClientesControllerBorrar_1 = __importDefault(require("../controllers/clientes/ClientesControllerBorrar"));
const ClientesControllerCrear_1 = __importDefault(require("../controllers/clientes/ClientesControllerCrear"));
const EditorialesControllerBuscar_1 = __importDefault(require("../controllers/editoriales/EditorialesControllerBuscar"));
const EditorialesControllerTodo_1 = __importDefault(require("../controllers/editoriales/EditorialesControllerTodo"));
const EditorialesControllerActualizar_1 = __importDefault(require("../controllers/editoriales/EditorialesControllerActualizar"));
const EditorialesControllerBorrar_1 = __importDefault(require("../controllers/editoriales/EditorialesControllerBorrar"));
const EditorialesControllerCrear_1 = __importDefault(require("../controllers/editoriales/EditorialesControllerCrear"));
const LibrosControllerBuscar_1 = __importDefault(require("../controllers/libros/LibrosControllerBuscar"));
const LibrosControllerTodo_1 = __importDefault(require("../controllers/libros/LibrosControllerTodo"));
const LibrosControllerActualizar_1 = __importDefault(require("../controllers/libros/LibrosControllerActualizar"));
const LibrosControllerBorrar_1 = __importDefault(require("../controllers/libros/LibrosControllerBorrar"));
const LibrosControllerCrear_1 = __importDefault(require("../controllers/libros/LibrosControllerCrear"));
const AutorControllerBuscar_1 = __importDefault(require("../controllers/autor/AutorControllerBuscar"));
const AutorControllerTodo_1 = __importDefault(require("../controllers/autor/AutorControllerTodo"));
const AutorControllerActualizar_1 = __importDefault(require("../controllers/autor/AutorControllerActualizar"));
const AutorControllerBorrar_1 = __importDefault(require("../controllers/autor/AutorControllerBorrar"));
const autorcontrollerCrear_1 = __importDefault(require("../controllers/autor/autorcontrollerCrear"));
const DepresControllerBuscar_1 = __importDefault(require("../controllers/detalle_prestamos/DepresControllerBuscar"));
const DepresControllerTodo_1 = __importDefault(require("../controllers/detalle_prestamos/DepresControllerTodo"));
const DepresControllerAct_1 = __importDefault(require("../controllers/detalle_prestamos/DepresControllerAct"));
const DepresControllerBorrar_1 = __importDefault(require("../controllers/detalle_prestamos/DepresControllerBorrar"));
const DepresControllerCrear_1 = __importDefault(require("../controllers/detalle_prestamos/DepresControllerCrear"));
const PrestControllerBuscar_1 = __importDefault(require("../controllers/prestamos/PrestControllerBuscar"));
const PrestControllerTodo_1 = __importDefault(require("../controllers/prestamos/PrestControllerTodo"));
const PrestControllerAct_1 = __importDefault(require("../controllers/prestamos/PrestControllerAct"));
const PrestControllerBorrar_1 = __importDefault(require("../controllers/prestamos/PrestControllerBorrar"));
const PrestControllerCrear_1 = __importDefault(require("../controllers/prestamos/PrestControllerCrear"));
class Rutas {
    constructor() {
        //inicializa el router y la configuracion
        this.rutaAPI = (0, express_1.Router)();
        this.configuracion();
    }
    configuracion() {
        //inicializa las rutas
        this.rutasClientes();
        this.rutasEditoriales();
        this.rutasLibros();
        this.rutasAutores();
        this.rutasDepresion();
        this.rutasPrestamo();
    }
    rutasClientes() {
        this.rutaAPI.get('/cliente', ClientesControllerTodo_1.default.dameClientes);
        this.rutaAPI.get('/cliente/:idCliente', ClientesControllerBuscar_1.default.buscarClientes);
        this.rutaAPI.put('/cliente/actualizar-cliente', ClientesControllerActualizar_1.default.actualizarCliente);
        this.rutaAPI.delete('/cliente/eliminar/:idCliente', ClientesControllerBorrar_1.default.eliminarCliente);
        this.rutaAPI.post('/cliente/crear', ClientesControllerCrear_1.default.crearCliente);
    }
    rutasEditoriales() {
        this.rutaAPI.get('/editoriales', EditorialesControllerTodo_1.default.dameEditoriales);
        this.rutaAPI.get('/editoriales/:idEditorial', EditorialesControllerBuscar_1.default.buscarEditorial);
        this.rutaAPI.put('/editoriales/actualizar', EditorialesControllerActualizar_1.default.actualizarEditorial);
        this.rutaAPI.delete('/editoriales/eliminar/:idEditorial', EditorialesControllerBorrar_1.default.eliminarEditorial);
        this.rutaAPI.post('/editoriales/crear', EditorialesControllerCrear_1.default.crearEditoriales);
    }
    rutasLibros() {
        this.rutaAPI.get('/libros', LibrosControllerTodo_1.default.dameLibros);
        this.rutaAPI.get('/libros/:idLibro', LibrosControllerBuscar_1.default.buscarLibros);
        this.rutaAPI.put('/libros/actualizar', LibrosControllerActualizar_1.default.actualizarLibro);
        this.rutaAPI.delete('/libros/eliminar/:idLibro', LibrosControllerBorrar_1.default.borrarLibro);
        this.rutaAPI.post('/libros/crear', LibrosControllerCrear_1.default.crearLibro);
    }
    rutasAutores() {
        this.rutaAPI.get('/autores/todo', AutorControllerTodo_1.default.dameAutoresCarajo);
        this.rutaAPI.get('/autores/buscar/:idAutor', AutorControllerBuscar_1.default.buscarAutorID);
        this.rutaAPI.put('/autores/actualizar', AutorControllerActualizar_1.default.actualizarAutor);
        this.rutaAPI.delete('/autores/eliminar/:idAutor', AutorControllerBorrar_1.default.eliminarAutor);
        this.rutaAPI.post('/autores/crear', autorcontrollerCrear_1.default.crearAutor);
    }
    rutasDepresion() {
        this.rutaAPI.get('/depres/todo', DepresControllerTodo_1.default.dameDepresTodo);
        this.rutaAPI.get('/depres/buscarID/:idDetallePrestamos', DepresControllerBuscar_1.default.buscarDEpres);
        this.rutaAPI.put('/depres/actualizar', DepresControllerAct_1.default.actualizarDepres);
        this.rutaAPI.delete('/depres/eliminar/:idDetallePrestamos', DepresControllerBorrar_1.default.eliminarDepres);
        this.rutaAPI.post('/depres/crear', DepresControllerCrear_1.default.crearDepres);
    }
    rutasPrestamo() {
        this.rutaAPI.get('/prestamos/todo', PrestControllerTodo_1.default.damePrestamos);
        this.rutaAPI.get('/prestamos/buscarID/:idPrestamo', PrestControllerBuscar_1.default.buscarPrestamo);
        this.rutaAPI.put('/prestamos/actualizar', PrestControllerAct_1.default.actualizarPrestamos);
        this.rutaAPI.delete('/prestamos/eliminar/:idPrestamo', PrestControllerBorrar_1.default.eliminarPrestamo);
        this.rutaAPI.post('/prestamos/crear', PrestControllerCrear_1.default.crearPrestamo);
    }
}
const rutas = new Rutas();
exports.default = rutas.rutaAPI;
