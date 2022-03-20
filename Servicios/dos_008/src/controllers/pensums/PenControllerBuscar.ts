import { SQL_PENSUMS_BUSCAR } from './../../repositories/pensums/pensums_sql_Buscar';
import {Response,Request} from 'express';
import PensumDao from '../../daos/pensums/PenDaoBuscar';

class PenControllerBuscar extends PensumDao{
    public buscarPensum(req:Request, res:Response):void{
        const codigo = req.params.codigoPensum;
        const parametro = [codigo];

        PenControllerBuscar.encontrarPensum(SQL_PENSUMS_BUSCAR.BUSCAR, parametro, res);
    }
}
const penControllerBuscar = new PenControllerBuscar();
export default penControllerBuscar;