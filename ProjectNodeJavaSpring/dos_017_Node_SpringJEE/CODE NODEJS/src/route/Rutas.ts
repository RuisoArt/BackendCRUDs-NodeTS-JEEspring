import { Router } from "express";
import clientesBuscar from '../controllers/clientes/ClientesControllerBuscar';
import clientesTodo from "../controllers/clientes/ClientesControllerTodo";
import clientesActualizar from "../controllers/clientes/ClientesControllerActualizar";
import clientesBorrar from "../controllers/clientes/ClientesControllerBorrar";
import clientesCrear from "../controllers/clientes/ClientesControllerCrear";

import editorialesBuscar from '../controllers/editoriales/EditorialesControllerBuscar';
import editorialesTodo from '../controllers/editoriales/EditorialesControllerTodo';
import editorialesActualizar from '../controllers/editoriales/EditorialesControllerActualizar';
import editorialesBorrar from '../controllers/editoriales/EditorialesControllerBorrar';
import editorialesCrear from '../controllers/editoriales/EditorialesControllerCrear';

import librosBuscar from '../controllers/libros/LibrosControllerBuscar';
import librosTodo from '../controllers/libros/LibrosControllerTodo';
import librosActualizar from '../controllers/libros/LibrosControllerActualizar';
import librosBorrar from '../controllers/libros/LibrosControllerBorrar';
import librosCrear from '../controllers/libros/LibrosControllerCrear';

import autorBuscar from '../controllers/autor/AutorControllerBuscar';
import autorTodo from '../controllers/autor/AutorControllerTodo';
import autorActualizar from '../controllers/autor/AutorControllerActualizar';
import autorBorrar from '../controllers/autor/AutorControllerBorrar';
import autorCrear from '../controllers/autor/autorcontrollerCrear';

import depresBuscar from '../controllers/detalle_prestamos/DepresControllerBuscar';
import depresTodo from '../controllers/detalle_prestamos/DepresControllerTodo';
import depresAct from '../controllers/detalle_prestamos/DepresControllerAct';
import depresBorrar from '../controllers/detalle_prestamos/DepresControllerBorrar';
import depresCrear from '../controllers/detalle_prestamos/DepresControllerCrear';

import prestamoBuscar from '../controllers/prestamos/PrestControllerBuscar';
import prestamoTodo from '../controllers/prestamos/PrestControllerTodo';
import prestamoAct from '../controllers/prestamos/PrestControllerAct';
import prestamoBorrar from '../controllers/prestamos/PrestControllerBorrar';
import prestamoCrear from '../controllers/prestamos/PrestControllerCrear';

class Rutas{
    public rutaAPI: Router;

    constructor(){
        //inicializa el router y la configuracion
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        //inicializa las rutas
        this.rutasClientes();
        this.rutasEditoriales();
        this.rutasLibros();
        this.rutasAutores();
        this.rutasDepresion();
        this.rutasPrestamo();
    }
    public rutasClientes(){
        this.rutaAPI.get('/cliente', clientesTodo.dameClientes);
        this.rutaAPI.get('/cliente/:idCliente', clientesBuscar.buscarClientes);
        this.rutaAPI.put('/cliente/actualizar-cliente',clientesActualizar.actualizarCliente);
        this.rutaAPI.delete('/cliente/eliminar/:idCliente', clientesBorrar.eliminarCliente);
        this.rutaAPI.post('/cliente/crear', clientesCrear.crearCliente);
    }
    public rutasEditoriales(){
        this.rutaAPI.get('/editoriales', editorialesTodo.dameEditoriales);
        this.rutaAPI.get('/editoriales/:idEditorial', editorialesBuscar.buscarEditorial);
        this.rutaAPI.put('/editoriales/actualizar',editorialesActualizar.actualizarEditorial);
        this.rutaAPI.delete('/editoriales/eliminar/:idEditorial',editorialesBorrar.eliminarEditorial);
        this.rutaAPI.post('/editoriales/crear', editorialesCrear.crearEditoriales);
    }
    public rutasLibros(){
        this.rutaAPI.get('/libros', librosTodo.dameLibros);
        this.rutaAPI.get('/libros/:idLibro', librosBuscar.buscarLibros);
        this.rutaAPI.put('/libros/actualizar', librosActualizar.actualizarLibro);
        this.rutaAPI.delete('/libros/eliminar/:idLibro', librosBorrar.borrarLibro);
        this.rutaAPI.post('/libros/crear', librosCrear.crearLibro);
    }
    public rutasAutores(){
        this.rutaAPI.get('/autores/todo', autorTodo.dameAutoresCarajo);
        this.rutaAPI.get('/autores/buscar/:idAutor', autorBuscar.buscarAutorID);
        this.rutaAPI.put('/autores/actualizar', autorActualizar.actualizarAutor);
        this.rutaAPI.delete('/autores/eliminar/:idAutor', autorBorrar.eliminarAutor);
        this.rutaAPI.post('/autores/crear', autorCrear.crearAutor);
    }
    public rutasDepresion(){
        this.rutaAPI.get('/depres/todo', depresTodo.dameDepresTodo);
        this.rutaAPI.get('/depres/buscarID/:idDetallePrestamos', depresBuscar.buscarDEpres);
        this.rutaAPI.put('/depres/actualizar', depresAct.actualizarDepres);
        this.rutaAPI.delete('/depres/eliminar/:idDetallePrestamos', depresBorrar.eliminarDepres);
        this.rutaAPI.post('/depres/crear', depresCrear.crearDepres);
    }
    public rutasPrestamo(){
        this.rutaAPI.get('/prestamos/todo', prestamoTodo.damePrestamos);
        this.rutaAPI.get('/prestamos/buscarID/:idPrestamo', prestamoBuscar.buscarPrestamo);
        this.rutaAPI.put('/prestamos/actualizar', prestamoAct.actualizarPrestamos);
        this.rutaAPI.delete('/prestamos/eliminar/:idPrestamo', prestamoBorrar.eliminarPrestamo);
        this.rutaAPI.post('/prestamos/crear',prestamoCrear.crearPrestamo);
    }
}
const rutas = new Rutas();
export default rutas.rutaAPI;