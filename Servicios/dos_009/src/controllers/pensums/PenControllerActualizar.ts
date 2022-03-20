import { SQL_PENSUMS_ACTUALIZAR } from './../../repositories/pensums/pensums_sql_Actualizar';
import {Response,Request} from 'express';
import PensumDao from '../../daos/pensums/PenDaoActualizar';

class PenControllerActualizar extends PensumDao{
    public actualizarPensum(req:Request, res:Response):void{
        const codigo = req.body.codigoPensum;
        const codigo2 = req.body.codigoPrograma;
        const nombre = req.body.nombrePensum;

        const parametro = [codigo2,nombre,codigo];

        PenControllerActualizar.refrescarPensum(SQL_PENSUMS_ACTUALIZAR.F5, parametro, res);
    }
}
const penControllerActualizar = new PenControllerActualizar();
export default penControllerActualizar;