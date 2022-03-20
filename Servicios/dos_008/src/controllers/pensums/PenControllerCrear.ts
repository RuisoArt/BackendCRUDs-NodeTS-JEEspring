import { SQL_PENSUMS_CONFIRMAR } from './../../repositories/pensums/pensums_sql_Confirmar';
import { SQL_PENSUMS_CREAR } from './../../repositories/pensums/pensums_sql_Crear';
import {Response,Request} from 'express';
import PensumDao from '../../daos/pensums/PenDaoCrear';

class PenControllerCrear extends PensumDao{
    public grabarPensum(req:Request, res:Response):void{
        const codigo2 = req.body.codigoPrograma;
        const nombre = req.body.nombrePensum;

        const parametro = [codigo2, nombre];

        PenControllerCrear.crearPensum(SQL_PENSUMS_CONFIRMAR.CONFIRMAR , SQL_PENSUMS_CREAR.CREAR, parametro, res);        
    }
}
const penControllerCrear = new PenControllerCrear();
export default penControllerCrear;