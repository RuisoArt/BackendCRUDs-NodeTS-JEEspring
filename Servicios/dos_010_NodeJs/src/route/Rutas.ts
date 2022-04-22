import {Router} from 'express';

import usuControllerActualizar from '../controllers/usuarios/UsuControllerActualizar';
import usuControllerBorrar from '../controllers/usuarios/UsuControllerBorrar';
import usuControllerBuscar from '../controllers/usuarios/UsuControllerBuscar';
import usuControllerCrear from '../controllers/usuarios/UsuControllerCrear';
import usuControllerTodo from '../controllers/usuarios/UsuControllerTodo';

import accessControllerTodo from '../controllers/accesos/AccessControllerTodo';
import accessControllerValidar from '../controllers/accesos/AccessControllerValidar';
import accesControllerContar from '../controllers/accesos/AccessControllerContar';

class Rutas{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasUsuarios();
        this.rutasAcceso();
    }
    public rutasUsuarios(){
        this.rutaAPI.get('/usuario', usuControllerTodo.dameUsuarios);
        this.rutaAPI.post('/usuario/crear', usuControllerCrear.grabarUsuario);
        this.rutaAPI.get('/usuario/:codUsuario', usuControllerBuscar.buscarUsuario);
        this.rutaAPI.delete('/usuario/:codUsuario', usuControllerBorrar.eliminarUsuario);
        this.rutaAPI.put('/usuario/actualizar', usuControllerActualizar.refrescarUsuario);
    }
    public rutasAcceso(){
        this.rutaAPI.get('/acceso', accessControllerTodo.dameUsuarios);
        this.rutaAPI.post('/acceso/validar', accessControllerValidar.encontrarUsuario);
        this.rutaAPI.get('/acceso/contar', accesControllerContar.conteoIngresos);
    }
    

}
const rutas = new Rutas();
export default rutas.rutaAPI;