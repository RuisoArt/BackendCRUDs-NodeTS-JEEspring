import { SQL_PENSUMS_BORRAR } from './../../repositories/pensums/pensums_sql_Borrar';
import {Response,Request} from 'express';
import PensumDao from '../../daos/pensums/PenDaoBorrar';

class PenControllerBorrar extends PensumDao{
    public eliminarPensum(req:Request, res:Response){
        const codigo = req.params.codigoPensum;
        const parametro = [codigo];

        PenControllerBorrar.borrarPensum(SQL_PENSUMS_BORRAR.BORRAR, parametro, res);
    }
}
const penControllerBorrar = new PenControllerBorrar();
export default penControllerBorrar;