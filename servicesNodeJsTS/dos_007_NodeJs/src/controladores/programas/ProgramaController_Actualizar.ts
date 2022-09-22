import { SQL_PROGRAMAS_ACTUALIZAR } from './../../repositorios/programas/programas_actualizar_sql';
import { Response,Request } from 'express';
import ProgramaDao_F5 from '../../daos/programas/ProgramaDao_Actualizar';

class ProgramaController_Actualizar extends ProgramaDao_F5{

    public actualizarProgramas(req:Request, res:Response):void{

        const codigo  = req.body.codigoPrograma;
        const nombre = req.body.nombrePrograma;
        const parametro = [nombre,codigo];

        ProgramaController_Actualizar.actualizarPrograma(SQL_PROGRAMAS_ACTUALIZAR.F5, parametro, res);
    }

}
const programaController_Actualizar = new ProgramaController_Actualizar();
export default programaController_Actualizar;