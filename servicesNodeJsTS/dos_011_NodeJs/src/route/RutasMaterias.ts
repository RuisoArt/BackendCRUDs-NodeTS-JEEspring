import {Router} from 'express';

import mateControllerTodo from '../controllers/materias/MateControllerTodo';
import mateControllerCrear from '../controllers/materias/MateControllerCrear';
import mateControllerBuscar from '../controllers/materias/MateControllerBuscar';
import mateControllerBorrar from '../controllers/materias/MateControllerBorrar';
import mateControllerActualizar from '../controllers/materias/MateControllerActualizar';

class RutasMaterias{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasMaterias();
    }
    public rutasMaterias(){
        this.rutaAPI.get('/materia', mateControllerTodo.dameMaterias);
        this.rutaAPI.post('/materia/crear', mateControllerCrear.grabarMateria);
        this.rutaAPI.get('/materia/:codigoMateria', mateControllerBuscar.buscarMateria);
        this.rutaAPI.delete('/materia/:codigoMateria', mateControllerBorrar.eliminarMateria);
        this.rutaAPI.put('/materia/actualizar', mateControllerActualizar.actualizarMaterias);
    }
}
const rutasMaterias = new RutasMaterias();
export default rutasMaterias.rutaAPI;