import {Router} from 'express';

import accessControllerTodo from '../controllers/accesos/AcessControllerTodo';
import accessControllerValidar from '../controllers/accesos/AcessControllerValidar';

class RutasAccesos{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasAccesos();
    }
    public rutasAccesos(){
        this.rutaAPI.get('/acceso' , accessControllerTodo.dameUsuarios);
        this.rutaAPI.post('/acceso/validar' , accessControllerValidar.encontrarUsuario);
    }

}
const rutasAccesos = new RutasAccesos();
export default rutasAccesos.rutaAPI;