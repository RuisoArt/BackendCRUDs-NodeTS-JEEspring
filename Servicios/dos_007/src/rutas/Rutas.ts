import {Router} from 'express';
import programaController from '../controladores/ProgramaController';
import semestreController from '../controladores/SemestreController';
import programaController_Actualizar from '../controladores/programas/ProgramaController_Actualizar'

class Rutas{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaAPI.get('/programa', programaController.dameProgramas);
        this.rutaAPI.post('/programa/crear', programaController.grabarProgramas);
        this.rutaAPI.get('/programa/:codigoPrograma', programaController.buscarPrograma);
        this.rutaAPI.delete('/programa/:codigoPrograma', programaController.eliminarPrograma);
        this.rutaAPI.put('/programa/actualizar', programaController_Actualizar.actualizarProgramas);

        this.rutaAPI.get('/semestre', semestreController.dameSemestres);
        this.rutaAPI.post('/semestre/crear', semestreController.grabarSemestres);
    }
}
const rutas = new Rutas();
export default rutas.rutaAPI;