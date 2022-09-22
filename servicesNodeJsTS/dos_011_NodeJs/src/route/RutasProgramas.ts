import {Router} from 'express';

import proControllerTodo from '../controllers/programas/ProControllerTodo';
import proControllerCrear from '../controllers/programas/ProControllerCrear';
import proControllerBuscar from '../controllers/programas/ProControllerBuscar';
import proControllerBorrar from '../controllers/programas/ProControllerBorrar';
import proControllerActualizar from '../controllers/programas/ProControllerActualizar';

class RutasProgramas{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasProgramas();
    }
    public rutasProgramas(){
        this.rutaAPI.get('/programa', proControllerTodo.dameProgramas);
        this.rutaAPI.post('/programa/crear', proControllerCrear.grabarProgramas);
        this.rutaAPI.get('/programa/:codigoPrograma', proControllerBuscar.buscarPrograma);
        this.rutaAPI.delete('/programa/:codigoPrograma', proControllerBorrar.eliminarPrograma);
        this.rutaAPI.put('/programa/actualizar', proControllerActualizar.actualizarProgramas);
    }
}
const rutasProgramas = new RutasProgramas();
export default rutasProgramas.rutaAPI;
