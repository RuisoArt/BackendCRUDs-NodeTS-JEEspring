import { SQL_PROGRAMAS_ACTUALIZAR } from './../../repositories/programas/programas_sql_Actualizar';
import { Response,Request } from 'express';
import ProgramaDao from '../../daos/programas/ProgramasDaoActualizar';

class ProControllerActualizar extends ProgramaDao{
    public actualizarProgramas(req:Request, res:Response):void{

        const codigo  = req.body.codigoPrograma;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre,codigo];

        ProControllerActualizar.actualizarPrograma(SQL_PROGRAMAS_ACTUALIZAR.F5, parametro, res);
    }
}
const proControllerActualizar = new ProControllerActualizar();
export default proControllerActualizar;