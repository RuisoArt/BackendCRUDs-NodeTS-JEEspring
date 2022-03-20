import { SQL_SEMESTRES_CREAR } from './../../repositories/semestres/semestres_sql_Crear';
import { SQL_SEMESTRES_CONFIRMAR } from './../../repositories/semestres/semestres_sql_Confirmar';
import {Response,Request} from 'express';
import SemestreDao from '../../daos/semestres/SemestresDaoCrear';

class SemeControllerCrear extends SemestreDao{
    public grabarSemestres(req:Request, res:Response):void{
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];

        SemeControllerCrear.crearSemestre(SQL_SEMESTRES_CONFIRMAR.CONFIRMAR, SQL_SEMESTRES_CREAR.CREAR, parametro, res);
    }
}
const semeControllerCrear = new SemeControllerCrear();
export default semeControllerCrear;