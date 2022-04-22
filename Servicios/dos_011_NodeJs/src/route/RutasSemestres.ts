import {Router} from 'express';

import semeControllerTodo from '../controllers/semestres/SemeControllerTodo';
import semeControllerCrear from '../controllers/semestres/SemeControllerCrear';
import semeControllerBuscar from '../controllers/semestres/SemeControllerBuscar';
import semeControllerBorrar from '../controllers/semestres/SemeControllerBorrar';
import semeControllerActualizar from '../controllers/semestres/SemeControllerActualizar';

class RutasSemestres{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasSemestres();
    }
    public rutasSemestres(){
        this.rutaAPI.get('/semestre', semeControllerTodo.dameSemestres);
        this.rutaAPI.post('/semestre/crear', semeControllerCrear.grabarSemestres);
        this.rutaAPI.get('/semestre/:codigoSemestre', semeControllerBuscar.buscarSemestre);
        this.rutaAPI.delete('/semestre/:codigoSemestre', semeControllerBorrar.eliminarSemestre);
        this.rutaAPI.put('/semestre/actualizar', semeControllerActualizar.actualizarSemestre);
    }
}
const rutasSemestres = new RutasSemestres();
export default rutasSemestres.rutaAPI;