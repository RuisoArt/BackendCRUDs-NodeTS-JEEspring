import { SQL_PROGRAMAS_BUSCAR } from './../../repositories/programas/programas_sql_Buscar';
import { Response,Request } from 'express';
import ProgramaDao from '../../daos/programas/ProgramasDaoBuscar';

class ProControllerBuscar extends ProgramaDao{
    public buscarPrograma(req:Request, res:Response): void{
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];

        ProControllerBuscar.encontrarPrograma(SQL_PROGRAMAS_BUSCAR.CARGAR, parametro, res);
    }
}
const proControllerBuscar = new ProControllerBuscar();
export default proControllerBuscar;