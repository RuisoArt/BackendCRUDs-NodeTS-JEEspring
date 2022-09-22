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
    }
}
const facultadesRutas = new FacultadesRutas();
export default facultadesRutas.rutaFacuApi;