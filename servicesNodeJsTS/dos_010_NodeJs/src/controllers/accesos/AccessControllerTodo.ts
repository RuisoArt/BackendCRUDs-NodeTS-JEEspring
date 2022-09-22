import { SQL_ACCESO_TODO } from './../../repositories/accesos/acc_sql_Todo';
import { Response } from "express";
import { Request } from "express";
import AccessDao from '../../daos/accesos/AccessDaoTodo';

class AccessControllerTodo extends AccessDao{
    public dameUsuarios(req:Request, res:Response):void{
        AccessControllerTodo.obtenerAccesos(SQL_ACCESO_TODO.TODO,[],res);
    }
}
const accessControllerTodo = new AccessControllerTodo();
export default accessControllerTodo;