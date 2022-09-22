import { Response,Request } from 'express';
import ProgramaDao from '../../daos/programas/ProgramasDaoTodo';
import {SQL_PROGRAMAS_TODO} from '../../repositories/programas/programas_sql_Todo';

class ProControllerTodo extends ProgramaDao{
    public dameProgramas(req:Request, res:Response):void{
        ProControllerTodo.obtenerPrograma(SQL_PROGRAMAS_TODO.TODO,[],res);
    }
}
const proControllerTodo = new ProControllerTodo();
export default proControllerTodo;