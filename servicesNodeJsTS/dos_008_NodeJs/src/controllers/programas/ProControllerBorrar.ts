import { SQL_PROGRAMAS_BORRAR } from './../../repositories/programas/programas_sql_Borrar';
import { Response,Request } from 'express';
import ProgramaDao from '../../daos/programas/ProgramasDaoBorrar';

class ProControllerBorrar extends ProgramaDao {
    public eliminarPrograma(req:Request, res:Response){
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];

        ProControllerBorrar.eliminarPrograma(SQL_PROGRAMAS_BORRAR.BORRAR, parametro, res);
    }
}
const proControllerBorrar = new ProControllerBorrar();
export default proControllerBorrar;