import { SQL_PROGRAMAS_CONFIRMAR } from './../../repositories/programas/programas_sql_Confirmar';
import { SQL_PROGRAMAS_CREAR } from './../../repositories/programas/programas_sql_Crear';
import { Response,Request } from 'express';
import ProgramaDao from '../../daos/programas/ProgramasDaoCrear';

class ProControllerCrear extends ProgramaDao{
    public grabarProgramas(req:Request, res:Response):void{

        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];

        ProControllerCrear.crearPrograma(SQL_PROGRAMAS_CONFIRMAR.CONFIRMAR, SQL_PROGRAMAS_CREAR.CREAR, parametro, res);
    }
}
const proControllerCrear = new ProControllerCrear();
export default proControllerCrear;