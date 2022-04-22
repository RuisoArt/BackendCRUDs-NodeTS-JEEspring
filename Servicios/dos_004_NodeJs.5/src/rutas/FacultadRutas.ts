import {Router} from 'express';
import facultadControlador from '../controladores/FacultadControlador';

class FacultadesRutas{
    public rutaFacuApi: Router;

    constructor(){
        this.rutaFacuApi = Router();
        this.configuracion();
    }
    public configuracion(){
        this.rutaFacuApi.get('/las_facultades', facultadControlador.dameFacultades);
        this.rutaFacuApi.get('/los_docentes', facultadControlador.dameDocentes);
    }
}
const facultadesRutas = new FacultadesRutas();
export default facultadesRutas.rutaFacuApi;