import { SQL_SEMESTRES_ACTUALIZAR } from './../../repositories/semestres/semestres_sql_Actualizar';
import {Response,Request} from 'express';
import SemestreDao from '../../daos/semestres/SemestresDaoActualizar';

class SemeControllerActualizar extends SemestreDao{
    public actualizarSemestre(req:Request, res:Response):void{
        const codigo  = req.body.codigoSemestre;
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre,codigo];

        SemeControllerActualizar.actualizarSemestre(SQL_SEMESTRES_ACTUALIZAR.F5, parametro, res);
    }
}
const semeControllerActualizar = new SemeControllerActualizar();
export default semeControllerActualizar;