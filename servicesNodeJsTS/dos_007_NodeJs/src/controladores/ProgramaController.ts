//import { SQL_PROGRAMAS } from './../repositorios/programas/programas_sql';
import { Response,Request } from 'express';
import ProgramaDao from '../daos/ProgramaDao';
import {SQL_PROGRAMAS} from '../repositorios/programas/programas_sql';

class ProgramaController extends ProgramaDao{
    public dameProgramas(req:Request, res:Response):void{
        ProgramaController.obtenerPrograma(SQL_PROGRAMAS.TODO,[],res);
    }

    public grabarProgramas(req:Request, res:Response):void{

        const nombre = req.body.nombrePrograma;
        const parametro = [nombre];

        ProgramaController.crearPrograma(SQL_PROGRAMAS.CONFIRMAR, SQL_PROGRAMAS.CREAR, parametro, res);
    }

    public buscarPrograma(req:Request, res:Response): void{
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];

        ProgramaController.encontrarPrograma(SQL_PROGRAMAS.CARGAR, parametro, res);
    }

    public eliminarPrograma(req:Request, res:Response){
        const codigo = req.params.codigoPrograma;
        const parametro = [codigo];

        ProgramaController.eliminarPrograma(SQL_PROGRAMAS.BORRAR, parametro, res);

    }
}
const programaController = new ProgramaController();
export default programaController;