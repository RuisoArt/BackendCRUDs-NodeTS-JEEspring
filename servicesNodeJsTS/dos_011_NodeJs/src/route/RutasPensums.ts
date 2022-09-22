import {Router} from 'express';

import penControllerActualizar from '../controllers/pensums/PenControllerActualizar';
import penControllerBorrar from '../controllers/pensums/PenControllerBorrar';
import penControllerBuscar from '../controllers/pensums/PenControllerBuscar';
import penControllerCrear from '../controllers/pensums/PenControllerCrear';
import penControllerTodo from '../controllers/pensums/PenControllerTodo';

class RutasPensums{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasPensums();
    }
    public rutasPensums(){
        this.rutaAPI.get('/pensum', penControllerTodo.damePensums);
        this.rutaAPI.post('/pensum/crear', penControllerCrear.grabarPensum);
        this.rutaAPI.get('/pensum/:codigoPensum', penControllerBuscar.buscarPensum);
        this.rutaAPI.delete('/pensum/:codigoPensum', penControllerBorrar.eliminarPensum);
        this.rutaAPI.put('/pensum/actualizar', penControllerActualizar.actualizarPensum);
    }

}
const rutasPensums = new RutasPensums();
export default rutasPensums.rutaAPI;