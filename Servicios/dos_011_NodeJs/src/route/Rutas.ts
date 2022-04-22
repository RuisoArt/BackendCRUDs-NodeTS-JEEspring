import {Router} from 'express';

import rutasPro from './RutasProgramas';
import proControllerTodo from '../controllers/programas/ProControllerTodo';
import proControllerCrear from '../controllers/programas/ProControllerCrear';
import proControllerBuscar from '../controllers/programas/ProControllerBuscar';
import proControllerBorrar from '../controllers/programas/ProControllerBorrar';
import proControllerActualizar from '../controllers/programas/ProControllerActualizar';

import rutasSeme from './RutasSemestres';
import semeControllerTodo from '../controllers/semestres/SemeControllerTodo';
import semeControllerCrear from '../controllers/semestres/SemeControllerCrear';
import semeControllerBuscar from '../controllers/semestres/SemeControllerBuscar';
import semeControllerBorrar from '../controllers/semestres/SemeControllerBorrar';
import semeControllerActualizar from '../controllers/semestres/SemeControllerActualizar';

import rutasMat from './RutasMaterias';
import mateControllerTodo from '../controllers/materias/MateControllerTodo';
import mateControllerCrear from '../controllers/materias/MateControllerCrear';
import mateControllerBuscar from '../controllers/materias/MateControllerBuscar';
import mateControllerBorrar from '../controllers/materias/MateControllerBorrar';
import mateControllerActualizar from '../controllers/materias/MateControllerActualizar';

import rutasPem from './RutasPensums';
import penControllerActualizar from '../controllers/pensums/PenControllerActualizar';
import penControllerBorrar from '../controllers/pensums/PenControllerBorrar';
import penControllerBuscar from '../controllers/pensums/PenControllerBuscar';
import penControllerCrear from '../controllers/pensums/PenControllerCrear';
import penControllerTodo from '../controllers/pensums/PenControllerTodo';

import rutasAcc from './RutasAccesos';
import accessControllerTodo from '../controllers/accesos/AcessControllerTodo';
import accessControllerValidar from '../controllers/accesos/AcessControllerValidar';

class Rutas{
    public rutaAPI: Router;

    constructor(){
        this.rutaAPI = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutasProgramas();
        this.rutasSemestres();
        this.rutasMateriaPensum();
        this.rutasMaterias();
        this.rutasPensums();
        this.rutasAccesos();
    }
    public rutasProgramas(){
        this.rutaAPI.get('/programa', proControllerTodo.dameProgramas);
        this.rutaAPI.post('/programa/crear', proControllerCrear.grabarProgramas);
        this.rutaAPI.get('/programa/:codigoPrograma', proControllerBuscar.buscarPrograma);
        this.rutaAPI.delete('/programa/:codigoPrograma', proControllerBorrar.eliminarPrograma);
        this.rutaAPI.put('/programa/actualizar', proControllerActualizar.actualizarProgramas);
    }
    public rutasSemestres(){
        this.rutaAPI.get('/semestre', semeControllerTodo.dameSemestres);
        this.rutaAPI.post('/semestre/crear', semeControllerCrear.grabarSemestres);
        this.rutaAPI.get('/semestre/:codigoSemestre', semeControllerBuscar.buscarSemestre);
        this.rutaAPI.delete('/semestre/:codigoSemestre', semeControllerBorrar.eliminarSemestre);
        this.rutaAPI.put('/semestre/actualizar', semeControllerActualizar.actualizarSemestre);
    }
    public rutasMaterias(){
        this.rutaAPI.get('/materia', mateControllerTodo.dameMaterias);
        this.rutaAPI.post('/materia/crear', mateControllerCrear.grabarMateria);
        this.rutaAPI.get('/materia/:codigoMateria', mateControllerBuscar.buscarMateria);
        this.rutaAPI.delete('/materia/:codigoMateria', mateControllerBorrar.eliminarMateria);
        this.rutaAPI.put('/materia/actualizar', mateControllerActualizar.actualizarMaterias);
    }
    public rutasPensums(){
        this.rutaAPI.get('/pensum', penControllerTodo.damePensums);
        this.rutaAPI.post('/pensum/crear', penControllerCrear.grabarPensum);
        this.rutaAPI.get('/pensum/:codigoPensum', penControllerBuscar.buscarPensum);
        this.rutaAPI.delete('/pensum/:codigoPensum', penControllerBorrar.eliminarPensum);
        this.rutaAPI.put('/pensum/actualizar', penControllerActualizar.actualizarPensum);
    }
    public rutasAccesos(){
        this.rutaAPI.get('/acceso' , accessControllerTodo.dameUsuarios);
        this.rutaAPI.post('/acceso/validar' , accessControllerValidar.encontrarUsuario);
    }
    public rutasMateriaPensum(){

    }
    

}
const rutas = new Rutas();
export default rutas.rutaAPI;